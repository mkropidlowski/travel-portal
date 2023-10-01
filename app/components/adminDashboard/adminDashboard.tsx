"use client";
import { FC } from "react";
import ActionHeader from "./components/actionHeader";
import Menu from "./components/menu";
import Heading from "./components/heading";
import { TravelIcon } from "../icons";
import Statistics from "./components/statistics";
import DataTable from "./components/dataTable";
import LatestActivity from "./components/latestActivity";
import { use } from "react";
import { getReservation } from "@/app/helpers/getReservation";

type AdminDashboardProps = {
    session: any;
};

const AdminDashboard: FC<AdminDashboardProps> = ({ session }) => {
    const reservationList = use(getReservation());

    let earningMoneyCount = reservationList.map((price: { totalPrice: number }) => price.totalPrice);

    const ammount = earningMoneyCount.reduce((a: number, b: number) => {
        return a + b;
    });

    return (
        <div className="w-full h-full flex flex-row justify-between">
            <Menu />
            <div className="ml-[270px] w-[calc(100%-270px)] flex flex-col">
                <ActionHeader sessionDetails={session} />
                <div className="flex flex-row w-full p-6 gap-5">
                    <div className="flex flex-col gap-5 w-[60%]">
                        <Heading
                            title="Welcome to Travel Portal"
                            descritpion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, harum! Autem quisquam consectetur culpa numquam porro blanditiis accusantium repellat mollitia totam beatae."
                            icon={<TravelIcon width={200} height={150} />}
                        />
                        <Statistics ammount={ammount} tripCount={earningMoneyCount.length} />
                        <DataTable reservations={reservationList} />
                    </div>
                    <div className="w-[40%]">
                        <LatestActivity />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
