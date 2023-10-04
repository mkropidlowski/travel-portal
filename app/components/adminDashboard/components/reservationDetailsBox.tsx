"use client";
import { BE_FormReservation } from "@/types/types";
import { FC, ReactNode, useState } from "react";
import Paragraph from "../../atoms/paragraph";
import { Showmore } from "../../icons";

type STATUS = "Waiting" | "Success" | "Rejected";

const ReservationDetailsBox: FC<BE_FormReservation> = ({
    name,
    surname,
    email,
    phone,
    street,
    houseNumber,
    locality,
    postalCode,
    birthDate,
    gender,
    tripId,
    dataRange,
    totalPrice,
    numberOfDays,
    location,
    firstParticipantName,
    firstParticipantSurname,
    firstParticipantPhone,
    firstParticipantBirthDate,
    firstParticipantGender,
    secondParticipantBirthDate,
    secondParticipantGender,
    secondParticipantName,
    secondParticipantSurname,
    secondParticipantPhone,
    status,
}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    };
    const statusClassMap = {
        Waiting: "bg-stone-300 text-stone-600",
        Success: "bg-green-200 text-green-700",
        Rejected: "bg-red-400 text-red-800",
    };

    return (
        <div className="flex flex-row w-full h-fit bg-slate-200 rounded-2xl p-3 shadow">
            <div className="flex flex-col w-full justify-between gap-3">
                <div className="flex flex-wrap gap-1" key={tripId}>
                    <Paragraph text="TripID" secondText={tripId} />
                    <Paragraph text="Name" secondText={name} />
                    <Paragraph text="Surname" secondText={surname} />
                    <Paragraph text="E-mail" secondText={email} />
                    <Paragraph text="Phone" secondText={phone} />
                    <Paragraph text="Street" secondText={street} />
                    <Paragraph text="House number" secondText={houseNumber} />
                    <Paragraph text="Locality" secondText={locality} />
                    <Paragraph text="Postal code" secondText={postalCode} />
                </div>
                {modalOpen ? (
                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm font-medium p-2">Visit information: </h2>
                        <div className="flex flex-wrap gap-1">
                            <Paragraph text="Trip location" secondText={location} />
                            <Paragraph text="Time of visit" secondText={dataRange} />
                            <Paragraph text="Total days" secondText={numberOfDays} />
                            <Paragraph text="Total price" secondText={`${totalPrice} $`} />
                        </div>
                        <h2 className="text-sm font-medium p-2">Tourist information: </h2>
                        <div className="flex w-full items-center">
                            {firstParticipantName ? (
                                <div className="flex flex-wrap w-[40%] gap-2">
                                    <Paragraph text="Name" secondText={firstParticipantName} />
                                    <Paragraph text="Surname" secondText={firstParticipantSurname} />
                                    <Paragraph text="Birth day" secondText={firstParticipantBirthDate} />
                                    <Paragraph text="Phone" secondText={firstParticipantPhone} />
                                    <Paragraph text="Gender" secondText={firstParticipantGender} />
                                </div>
                            ) : null}
                            {secondParticipantName ? (
                                <div className="flex flex-wrap w-[40%] gap-2">
                                    <Paragraph text="Name" secondText={secondParticipantName} />
                                    <Paragraph text="Surname" secondText={secondParticipantSurname} />
                                    <Paragraph text="Birth day" secondText={secondParticipantBirthDate} />
                                    <Paragraph text="Phone" secondText={secondParticipantPhone} />
                                    <Paragraph text="Gender" secondText={secondParticipantGender} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="flex items-center justify-center gap-4 h-8">
                <button
                    className={`w-[100px] h-[30px] flex items-center justify-center m-auto px-5 rounded-3xl font-semibold ${
                        statusClassMap[status as STATUS]
                    }`}
                >
                    {status}
                </button>
                <Showmore width={20} height={20} className="hover:cursor-pointer" onClick={handleModalToggle} />
            </div>
        </div>
    );
};

export default ReservationDetailsBox;
