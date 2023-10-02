"use client";
import { FC } from "react";
import Heading from "./heading";
import { BE_FormReservation } from "@/types/types";

type DataTableProps = {
    reservations: BE_FormReservation[];
};

type STATUS = "Waiting" | "Success" | "Rejected";

const DataTable: FC<DataTableProps> = ({ reservations }) => {
    const statusClassMap = {
        Waiting: "bg-gray text-stone-400",
        Success: "bg-green-200 text-green-700",
        Rejected: "bg-red-400 text-red-800",
    };
    return (
        <div className="w-full bg-white rounded-2xl shadow-md">
            <Heading
                title="List of trip status"
                descritpion="Lorem ipsum is simply dumy text of the printing blah blah typesetting."
                className="shadow-none"
            />
            <table className="w-[90%] m-auto text-base text-center text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-stone-600 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center border-b-[2px] border-gray">
                    <tr>
                        <th>Location</th>
                        <th>Days</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="text-stone-600">
                    {reservations.map((reservationDetails: any, index: number) => (
                        <tr
                            key={reservationDetails.tripId + index}
                            className="border-t border-stone-200 hover:bg-stone-100 hover:cursor-pointer leading-[40px]"
                        >
                            <td>{reservationDetails.location}</td>
                            <td>{reservationDetails.numberOfDays}</td>
                            <td>{reservationDetails.totalPrice} $</td>
                            <td>
                                <button
                                    className={`w-[100px] h-[30px] flex items-center justify-center m-auto px-5 rounded-3xl font-semibold ${
                                        statusClassMap[reservationDetails.status as STATUS]
                                    }`}
                                >
                                    {reservationDetails.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
