import { BE_FormReservation } from "@/types/types";

export const getReservation = async (): Promise<BE_FormReservation> => {
    const res = await fetch("/api/reservation", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
