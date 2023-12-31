"use client";
import useCheckIsAdmin from "@/app/helpers/useCheckIsAdmin";
import { useSession } from "next-auth/react";
import AdminDashboard from "@/app/components/adminDashboard/adminDashboard";
import UserDashboard from "@/app/components/userDashboard/userDashboard";

const DashboardPage = () => {
    const { data: session } = useSession();
    const isAdmin = useCheckIsAdmin();

    return (
        <>
            {isAdmin && <AdminDashboard session={session} />}
            {!isAdmin && <UserDashboard session={session} />}
        </>
    );
};

export default DashboardPage;
