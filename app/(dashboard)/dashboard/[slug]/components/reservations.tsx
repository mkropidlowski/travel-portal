import ReservationDetailsBox from "@/app/components/adminDashboard/components/reservationDetailsBox";
import Heading from "@/app/components/adminDashboard/components/heading";
import { Information } from "@/app/components/icons";
import { getReservation } from "@/app/helpers/getReservation";
import { BE_FormReservation } from "@/types/types";
import { use } from "react";

const Reservations = () => {
    const reservationList = use(getReservation());
    return (
        <div className="flex flex-col gap-2">
            <Heading
                title="Here you can find current reservation list, with current status."
                descritpion="You can find all important information about specific reservation."
                icon={<Information width={200} height={100} />}
            />
            <div className="flex flex-col gap-3">
                {reservationList.map((reservation: BE_FormReservation, i: number) => (
                    <ReservationDetailsBox key={i} {...reservation} />
                ))}
            </div>
        </div>
    );
};

export default Reservations;
