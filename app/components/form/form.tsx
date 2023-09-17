import { BE_Attraction, BE_BookingForm, BE_Reservation } from "@/types/types";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { bookingFormInputs, firstTourParticipantsInputs, secondTourParticipantsInputs } from "./data/data";
import Input from "../input/input";
import Button from "../button/button";
import { useRef } from "react";

const Form: FC<BE_Reservation> = ({ id, dateRange, numberOfDays, totalPrice }) => {
    const formRef = useRef();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<BE_BookingForm>({
        mode: "all",
    });

    const submitForm = async () => {
        const reservationData = getValues();
        const values = {
            id,
            dateRange,
            numberOfDays,
            totalPrice,
            reservationData,
        };

        console.log(values);
        try {
        } catch (error) {}
    };
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
                ref={formRef.current}
                className="flex flex-col gap-4 mt-8"
            >
                <div className="max-w-[700px] bg-white shadow-xl rounded-md p-4">
                    <h2 className="text-[20px] font-medium">1. DETAILS OF THE RESERVING PERSON/PAYER</h2>
                    <div className="w-full flex flex-wrap gap-3 p-3">
                        {bookingFormInputs.map(({ formKey, label }) => {
                            const formInputKey = formKey as keyof BE_BookingForm;
                            return (
                                <Input
                                    type="text"
                                    key={formInputKey}
                                    id={formKey}
                                    label={label}
                                    register={register}
                                    errors={errors}
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
                                const formInputKey = formKey as keyof BE_BookingForm;
                                return (
                                    <Input
                                        type="text"
                                        key={formInputKey}
                                        id={formKey}
                                        label={label}
                                        register={register}
                                        errors={errors}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 p-3 bg-slate-100 rounded-md">
                        <h2 className="text-[18px] bg-slate-200 font-medium p-2 rounded-sm">2. Second Adult</h2>
                        <div className="flex flex-wrap gap-2 p-3">
                            {secondTourParticipantsInputs.map(({ formKey, label }) => {
                                const formInputKey = formKey as keyof BE_BookingForm;
                                return (
                                    <Input
                                        type="text"
                                        key={formInputKey}
                                        id={formKey}
                                        label={label}
                                        register={register}
                                        errors={errors}
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
