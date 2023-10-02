import { BE_User } from "@/types/types";

export const getUsers = async (): Promise<BE_User> => {
    const res = await fetch("/api/users", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
};
