"use client";
import { BE_Attraction } from "@/types/types";
import { FC, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Offer from "./Offer";

const BookingDetails: FC<BE_Attraction> = ({ _id, name, pricePerDay, image, location, currency }) => {
    const [dateState, setDateState] = useState<[Date, Date]>([new Date(), new Date()]);
    const [dailyRate, setDailyRate] = useState(pricePerDay as number);

    const changeDate = (dates: [Date, Date]) => {
        setDateState(dates);
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString(undefined, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const calculateNumerOfDays = () => {
        const [startDate, endDate] = dateState;
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const numberOfDays = Math.ceil((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);

        return numberOfDays;
    };

    const numberOfDays = calculateNumerOfDays();

    const totalPrice = numberOfDays * dailyRate;
    const totalRange = `${formatDate(dateState[0])} - ${formatDate(dateState[1])}`;
    // console.log("Zakres:", `${formatDate(dateState[0])} - ${formatDate(dateState[1])}`);
    // console.log("Liczba dni pobytu: ", numberOfDays);
    // console.log("Cena pobytu: ", totalPrice);

    return (
        <div
            className="flex md:flex-row flex-col justify-around items-start min-w-[1140px] h-auto shadow-lg p-4 gap-5 mb-[100px]"
            id={_id}
        >
            <div>
                <Offer
                    _id={_id}
                    name={name}
                    image={image}
                    location={location}
                    dateRange={totalRange}
                    totalPrice={totalPrice}
                    numberOfDays={numberOfDays}
                    currency={currency}
                    allAmenities={{
                        propertyAmenities: undefined,
                        roomAmenities: undefined,
                        wellnessSpa: undefined,
                        accessibility: undefined,
                        forChildren: undefined,
                    }}
                />
            </div>
            <Calendar
                className={"bg-slate-200 mt-[40px]"}
                value={dateState}
                onChange={(value) => changeDate(value as [Date, Date])}
                selectRange
                locale="en-EN"
                minDate={new Date()}
            />
        </div>
    );
};

export default BookingDetails;
