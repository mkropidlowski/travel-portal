import Form from "@/app/components/form/form";
import { BE_Reservation } from "@/types/types";
import { FC } from "react";

const SummaryPage: FC<BE_Reservation> = ({ id, dateRange, numberOfDays, totalPrice }) => {
    return <Form dateRange={dateRange} totalPrice={totalPrice} numberOfDays={numberOfDays} id={id} />;
};

export default SummaryPage;
