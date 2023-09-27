"use client";
import useCheckIsAdmin from "@/app/helpers/useCheckIsAdmin";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const DashboardPage = () => {
    const { data: session } = useSession();

    const isAdmin = useCheckIsAdmin();
    console.log(session?.user?.role);

    return (
        <div className="md:min-w-[1200px] w-[320px] flex flex-col items-center justify-center relative top-[150px]">
            <div className=" h-[50px]">
                <h2>{session?.user?.email}</h2>
            </div>
            {isAdmin ? <h2>Witaj {session?.user?.name}</h2> : <h2>Nie masz uprawnień!</h2>}

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
