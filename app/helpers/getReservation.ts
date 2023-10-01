export const getReservation = async (): Promise<any> => {
    const res = await fetch("/api/reservation", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
