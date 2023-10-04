import { BE_Attraction } from "@/types/types";

const API = process.env.NEXT_API_LOCAL_URL;

export const getAttraction = async (): Promise<BE_Attraction> => {
    const res = await fetch(`http://localhost:3000/api/attraction`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
