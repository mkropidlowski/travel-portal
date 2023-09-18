import Form from "@/app/components/form/form";
import { BE_Reservation } from "@/types/types";
import { FC } from "react";

const SummaryPage: FC<BE_Reservation> = ({ tripId, dataRange, numberOfDays, totalPrice }) => {
    return <Form dataRange={dataRange} totalPrice={totalPrice} numberOfDays={numberOfDays} tripId={tripId} />;
};

export default SummaryPage;
