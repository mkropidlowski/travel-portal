import { BE_Attraction } from "@/types/types";

export const getAttraction = async (): Promise<BE_Attraction> => {
    const isLocalhost = Boolean(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

    const baseUrl = isLocalhost ? "http://localhost:3000" : "https://travel-portal-five.vercel.app";

    const res = await fetch(`${baseUrl}/api/attraction`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
