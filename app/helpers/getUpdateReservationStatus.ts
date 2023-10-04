import { BE_Reservation } from "@/types/types";
import { ReservationStatus } from "@prisma/client";

export const getUpdateReservationStatus = async (
    reservationId: string | any,
    updateStatusValue: ReservationStatus
): Promise<BE_Reservation> => {
    const res = await fetch(`/api/reservation/`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
