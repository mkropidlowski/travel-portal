import { signOut } from "next-auth/react";
import { FC } from "react";
import { Logout } from "../icons";

type UserProps = {
    session: any;
};

const UserDashboard: FC<UserProps> = ({ session }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white w-full h-[50vh] gap-3">
            <div className="flex items-center flex-col justify-around p-3 bg-white rounded-2xl w-[200px] shadow">
                <div className="hover:cursor-pointer">
                    <h2 className="font-medium">Hello, {session?.user?.name}</h2>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-md font-medium">You, are currently logged with user ROLE.</h2>
                <h3 className="text-sm">The user section is unavailable and its still develop, please be patient</h3>
                <h3 className="text-sm">
                    If you have any question contact with administator:{" "}
                    <span className="font-medium">admin@admin.com</span>
                </h3>
            </div>
            <div>
                <button
                    className="flex items-center justify-center font-medium w-[150px] rounded-2xl hover:bg-slate-200 p-[3px] shadow"
                    onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                >
                    <span className="p-2">
                        <Logout />
                    </span>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;
