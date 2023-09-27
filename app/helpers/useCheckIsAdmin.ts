import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";

const useCheckIsAdmin = () => {
    const { data: session } = useSession();
    return session?.user?.role === UserRole.ADMIN;
};

export default useCheckIsAdmin;
