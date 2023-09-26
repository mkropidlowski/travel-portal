import { UserRole } from "@/types/types";
import { useSession } from "next-auth/react";

const useCheckIsAdmin = () => {
    const { data: session } = useSession();
    return session?.user?.role_id === UserRole.ADMIN;
};

export default useCheckIsAdmin;
