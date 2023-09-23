"use client";
import { FormReservation } from "@/types/types";
import { FC, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { bookingFormInputs, firstTourParticipantsInputs, secondTourParticipantsInputs } from "./data/data";
import Input from "../input/input";
import Button from "../button/button";
import axios from "axios";
import toast from "react-hot-toast";
import { validationSchema } from "./data/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

const Form: FC<FormReservation> = ({ tripId, dataRange, numberOfDays, totalPrice }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormReservation>({
        mode: "all",
        //TODO FIX VALIDATION
        // resolver: yupResolver(validationSchema as any),
    });

    const submitForm = async (data: FormReservation) => {
        if (isValid) {
            const values = {
                ...data,
                tripId,
                dataRange,
                numberOfDays,
                totalPrice,
            };

            try {
                await axios
                    .post("/api/reservation", {
                        ...values,
                    })
                    .then(() => {
                        formRef.current?.reset();
                        toast.success("Great! Reservation completed.");
                        router.push("/finalization");
                    })
                    .catch((error) => {
                        toast.error("Invalid error, try again later.");
                        console.error("Błąd podczas wysyłania formularza:", error);
                    })

                    .finally(() => {
                        setIsLoading(false);
                    });
            } catch (error) {
                console.error("Form error: ", error);
            }
        } else {
            console.log("Nie no gościu coś jest nie tak");
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(submitForm)} ref={formRef} className="flex flex-col gap-4 mt-8">
                <div className="max-w-[700px] bg-white shadow-xl rounded-md p-4">
                    <h2 className="text-[20px] font-medium">1. DETAILS OF THE RESERVING PERSON/PAYER</h2>
                    <div className="w-full flex flex-wrap gap-3 p-3">
                        {bookingFormInputs.map(({ formKey, label }) => {
                            const formInputKey = formKey as keyof FormReservation;
                            return (
                                <Input
                                    type="text"
                                    disabled={isLoading}
                                    key={formInputKey}
                                    id={formKey}
                                    label={label}
                                    {...register(formInputKey)}
                                    error={!!errors[formInputKey]?.message || undefined}
                                    errorText={errors[formInputKey]?.message}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-w-[700px] bg-white shadow-xl rounded-md p-4">
                    <h2 className="text-[20px] font-medium">2. TRIP PARTICIPANTS DATA</h2>

                    <div className="w-full flex flex-col gap-2 p-3 bg-slate-100 rounded-md">
                        <h2 className="text-[18px] bg-slate-200 font-medium p-2 rounded-sm">1. First Adult</h2>
                        <div className="flex flex-wrap gap-2 p-3">
                            {firstTourParticipantsInputs.map(({ formKey, label }) => {
                                const formInputKey = formKey as keyof FormReservation;
                                return (
                                    <Input
                                        type="text"
                                        disabled={isLoading}
                                        key={formInputKey}
                                        id={formKey}
                                        label={label}
                                        {...register(formInputKey)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 p-3 bg-slate-100 rounded-md">
                        <h2 className="text-[18px] bg-slate-200 font-medium p-2 rounded-sm">2. Second Adult</h2>
                        <div className="flex flex-wrap gap-2 p-3">
                            {secondTourParticipantsInputs.map(({ formKey, label }) => {
                                const formInputKey = formKey as keyof FormReservation;
                                return (
                                    <Input
                                        type="text"
                                        disabled={isLoading}
                                        key={formInputKey}
                                        id={formKey}
                                        label={label}
                                        {...register(formInputKey)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="m-auto">
                        <Button type="submit" secondary className="w-[250px]">
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;
