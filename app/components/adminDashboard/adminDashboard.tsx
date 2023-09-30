import { FC } from "react";
import ActionHeader from "./components/actionHeader";
import Menu from "./components/menu";
import Heading from "./components/heading";
import { TravelIcon } from "../icons";
import Statistics from "./components/statistics";

type AdminDashboardProps = {
    session: any;
};

const AdminDashboard: FC<AdminDashboardProps> = ({ session }) => {
    return (
        <div className="w-full h-screen flex flex-row justify-between">
            <Menu />
            <div className="w-full flex flex-col">
                <ActionHeader sessionDetails={session} />
                <div className="flex flex-row w-full p-6">
                    <div className="w-[60%]">
                        <Heading
                            title="Welcome to Travel Portal"
                            descritpion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, harum! Autem quisquam consectetur culpa numquam porro blanditiis accusantium repellat mollitia totam beatae."
                            icon={<TravelIcon width={200} height={150} />}
                        />
                        <Statistics />
                    </div>
                    <div className="w-[40%]"></div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
