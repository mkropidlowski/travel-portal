"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
const DashboardPage = () => {
    const { data } = useSession();
    return (
        <div className="md:min-w-[1200px] w-[320px] flex flex-col items-center justify-center relative top-[150px]">
            {data?.user?.email}
            <button
                className="bg-red-500  text-white rounded-lg w-fit p-2"
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
            >
                Wyloguj
            </button>
        </div>
    );
};

export default DashboardPage;
