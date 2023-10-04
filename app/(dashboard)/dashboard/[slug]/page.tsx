"use client";
import ActionHeader from "@/app/components/adminDashboard/components/actionHeader";
import Menu from "@/app/components/adminDashboard/components/menu";
import useCheckIsAdmin from "@/app/helpers/useCheckIsAdmin";
import { useSession } from "next-auth/react";
import Tours from "./components/tours";
import Users from "./components/users";
import Reservations from "./components/reservations";
import AddAttraction from "./components/addAttraction";
import Settings from "./components/settings";

const Page = ({ params }: { params: { slug: string } }) => {
    const { data: session } = useSession();
    const isAdmin = useCheckIsAdmin();

    let content: JSX.Element | null = null;

    switch (params.slug) {
        case "tours":
            content = <Tours />;
            break;
        case "users":
            content = <Users />;
            break;
        case "reservation":
            content = <Reservations />;
            break;
        case "add-attraction":
            content = <AddAttraction />;
            break;
        case "settings":
            content = <Settings />;
        default:
            break;
    }

    return (
        <>
            {isAdmin && (
                <div className="w-full h-full flex flex-row justify-between">
                    <Menu />
                    <div className="ml-[270px] w-[calc(100%-270px)] flex flex-col">
                        <ActionHeader sessionDetails={session} />
                        <div className="flex flex-col w-full p-6">{content}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
