import { FC } from "react";
import ActionHeader from "./components/actionHeader";
import Menu from "./components/menu";

type AdminDashboardProps = {
    session: any;
};

const AdminDashboard: FC<AdminDashboardProps> = ({ session }) => {
    return (
        <div className="w-full h-screen flex flex-row justify-between">
            <div>
                <Menu />
            </div>
            <div className="w-full flex flex-col">
                <ActionHeader sessionDetails={session} />
            </div>
        </div>
    );
};

export default AdminDashboard;
