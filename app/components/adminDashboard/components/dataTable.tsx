"use client";
import { FC, useState } from "react";
import Heading from "./heading";
import { BE_FormReservation } from "@/types/types";

type DataTableProps = {
    reservations: BE_FormReservation[] | any; // TODO fix it latter []
};

type STATUS = "Waiting" | "Success" | "Rejected" | null;

const DataTable: FC<DataTableProps> = ({ reservations }) => {
    const [reservationStatus, setReservationStatus] = useState<STATUS>(null);
    return (
        <div className="w-full bg-white rounded-2xl">
            <Heading
                title="List of trip status"
                descritpion="Lorem ipsum is simply dumy text of the printing blah blah typesetting."
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
                                <button className="w-[100px] h-[30px] bg-gray text-stone-400 flex items-center justify-center m-auto px-5 rounded-3xl font-semibold">
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

// <tbody className="text-stone-600">
// <tr className="border-t border-stone-200 hover:bg-stone-100 hover:cursor-pointer leading-[40px]">
//     <td>Turkey</td>
//     <td>7</td>
//     <td>2</td>
//     <td>1500 $</td>
//     <td>
// <button className="w-[100px] h-[30px] bg-gray text-stone-400 flex items-center justify-center m-auto px-5 rounded-3xl font-semibold">
//     Hold
// </button>
//     </td>
// </tr>
// <tr className="border-t border-stone-200 hover:bg-stone-100 hover:cursor-pointer leading-[40px]">
//     <td>Turkey</td>
//     <td>7</td>
//     <td>2</td>
//     <td>1500 $</td>
//     <td>
//         <button className="w-[100px] h-[30px] bg-green-200 text-green-700 flex items-center justify-center m-auto px-5 rounded-3xl font-semibold">
//             Active
//         </button>
//     </td>
// </tr>
// <tr className="border-t border-stone-200 hover:bg-stone-100 hover:cursor-pointer leading-[40px]">
//     <td>Turkey</td>
//     <td>7</td>
//     <td>2</td>
//     <td>1500 $</td>
//     <td>
//         <button className="w-[100px] h-[30px] bg-red-400 text-red-800 flex items-center justify-center m-auto px-5 rounded-3xl font-semibold">
//             Closed
//         </button>
//     </td>
// </tr>
// <tr className="border-t border-stone-200 hover:bg-stone-100 hover:cursor-pointer leading-[40px]">
//     <td>Turkey</td>
//     <td>7</td>
//     <td>2</td>
//     <td>1500 $</td>
//     <td>
//         <button className="w-[100px] h-[30px] bg-red-400 text-red-800 flex items-center justify-center m-auto px-5 rounded-3xl font-semibold">
//             Closed
//         </button>
//     </td>
// </tr>
// <tr className="border-t border-stone-200 hover:bg-stone-100 hover:cursor-pointer leading-[40px]">
//     <td>Turkey</td>
//     <td>7</td>
//     <td>2</td>
//     <td>1500 $</td>
//     <td>
//         <button className="w-[100px] h-[30px] bg-green-200 text-green-700 flex items-center justify-center m-auto px-5 rounded-3xl font-semibold">
//             Active
//         </button>
//     </td>
// </tr>
// </tbody>
