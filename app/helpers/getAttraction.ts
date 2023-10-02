import { BE_Attraction } from "@/types/types";

export const getAttraction = async (): Promise<BE_Attraction> => {
    const res = await fetch("/api/attraction", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
