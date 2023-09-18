"use client";
import { BE_BookingForm, BE_Reservation } from "@/types/types";
import { FC, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { bookingFormInputs, firstTourParticipantsInputs, secondTourParticipantsInputs } from "./data/data";
import Input from "../input/input";
import Button from "../button/button";
import axios from "axios";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";
type Variant = "ADD";

const Form: FC<BE_Reservation> = ({ tripId, dataRange, numberOfDays, totalPrice }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>("ADD");
    const formRef = useRef<HTMLFormElement | null>(null);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<BE_BookingForm>({
        defaultValues: { name: "", surname: "" },
    });

    const submitForm: SubmitHandler<FieldValues> = (data) => {
        const values = {
            ...data,
            tripId,
            dataRange,
            numberOfDays,
            totalPrice,
        };
        setValue("name", "", { shouldValidate: true });
        axios
            .post("/api/reservation", {
                ...values,
            })
            .then(() => {
                formRef.current?.reset();
                toast.success("Great! Reservation completed.");
            })
            .catch(() => toast.error("Invalid error, try again later."))

            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
                ref={formRef}
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
                                    disabled={isLoading}
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
                                        disabled={isLoading}
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
                                        disabled={isLoading}
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
                            {variant === "ADD" && "Send"}
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;

// import { BE_Attraction, BE_BookingForm, BE_Reservation } from "@/types/types";
// import { FC } from "react";
// import { useForm } from "react-hook-form";
// import { bookingFormInputs, firstTourParticipantsInputs, secondTourParticipantsInputs } from "./data/data";
// import Input from "../input/input";
// import Button from "../button/button";
// import { useRef } from "react";
// import { publicEnvs } from "@/app/config/envs";
// import { NextResponse } from "next/server";
// import axios from "axios";

// export const dynamic = "force-dynamic";

// const Form: FC<BE_Reservation> = ({ id, dateRange, numberOfDays, totalPrice }) => {
//     const formRef = useRef();

//     const {
//         register,
//         handleSubmit,
//         getValues,
//         formState: { errors },
//     } = useForm<BE_BookingForm>({
//         mode: "all",
//     });

//     const submitForm = () => {
//         const reservationData = getValues();
//         const values = {
//             collection: "reservation",
//             database: "travelDB",
//             dataSource: "travelDb",
//             document: {
//                 id,
//                 dateRange,
//                 numberOfDays,
//                 totalPrice,
//                 reservationData,
//             },
//         };
//         axios.post(
//             `https://eu-central-1.aws.data.mongodb-api.com/app/data-uxggm/endpoint/data/v1/action/insertOne`,
//             values,
//             {
//                 headers: {
//                     // Accept: "application/json",
//                     "Content-Type": "application/json",
//                     // Authorization: "Bearer 650067b1bfabfdbc58b068eb",
//                     // "Access-Control-Request-Headers": "*",
//                     apiKey: "5JQWstG57IMFjZjSK6NaLW5E4QizbrfUBVwzcipyVnlzqkajvkdUOz9uP4dqPkY7",
//                 },
//             }
//         );
//     };

//     return (
//         <>
//             <form
//                 onSubmit={(e) => {
//                     e.preventDefault();
//                     handleSubmit(submitForm)();
//                 }}
//                 ref={formRef.current}
//                 className="flex flex-col gap-4 mt-8"
//             >
//                 <div className="max-w-[700px] bg-white shadow-xl rounded-md p-4">
//                     <h2 className="text-[20px] font-medium">1. DETAILS OF THE RESERVING PERSON/PAYER</h2>
//                     <div className="w-full flex flex-wrap gap-3 p-3">
//                         {bookingFormInputs.map(({ formKey, label }) => {
//                             const formInputKey = formKey as keyof BE_BookingForm;
//                             return (
//                                 <Input
//                                     type="text"
//                                     key={formInputKey}
//                                     id={formKey}
//                                     label={label}
//                                     register={register}
//                                     errors={errors}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-4 max-w-[700px] bg-white shadow-xl rounded-md p-4">
//                     <h2 className="text-[20px] font-medium">2. TRIP PARTICIPANTS DATA</h2>

//                     <div className="w-full flex flex-col gap-2 p-3 bg-slate-100 rounded-md">
//                         <h2 className="text-[18px] bg-slate-200 font-medium p-2 rounded-sm">1. First Adult</h2>
//                         <div className="flex flex-wrap gap-2 p-3">
//                             {firstTourParticipantsInputs.map(({ formKey, label }) => {
//                                 const formInputKey = formKey as keyof BE_BookingForm;
//                                 return (
//                                     <Input
//                                         type="text"
//                                         key={formInputKey}
//                                         id={formKey}
//                                         label={label}
//                                         register={register}
//                                         errors={errors}
//                                     />
//                                 );
//                             })}
//                         </div>
//                     </div>
//                     <div className="w-full flex flex-col gap-2 p-3 bg-slate-100 rounded-md">
//                         <h2 className="text-[18px] bg-slate-200 font-medium p-2 rounded-sm">2. Second Adult</h2>
//                         <div className="flex flex-wrap gap-2 p-3">
//                             {secondTourParticipantsInputs.map(({ formKey, label }) => {
//                                 const formInputKey = formKey as keyof BE_BookingForm;
//                                 return (
//                                     <Input
//                                         type="text"
//                                         key={formInputKey}
//                                         id={formKey}
//                                         label={label}
//                                         register={register}
//                                         errors={errors}
//                                     />
//                                 );
//                             })}
//                         </div>
//                     </div>
//                     <div className="m-auto">
//                         <Button type="submit" secondary className="w-[250px]">
//                             Send
//                         </Button>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// };

// export default Form;
