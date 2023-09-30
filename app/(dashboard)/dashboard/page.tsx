"use client";
import useCheckIsAdmin from "@/app/helpers/useCheckIsAdmin";
import { useSession } from "next-auth/react";
import AdminDashboard from "@/app/components/adminDashboard/adminDashboard";

const DashboardPage = () => {
    const { data: session } = useSession();
    const isAdmin = useCheckIsAdmin();

    return (
        <>
            {isAdmin ? (
                <AdminDashboard session={session} />
            ) : (
                <div className="w-full flex flex-col items-center justify-center">Panel uzytkownika</div>
            )}
        </>
    );
};

export default DashboardPage;
