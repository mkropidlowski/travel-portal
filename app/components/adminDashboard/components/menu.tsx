import { FC } from "react";
import { dashboardLinks } from "./helpers/menuLinks";
import Link from "next/link";
import { Settings, Logout, Airplane } from "../../icons";

type MenuProps = {
    links?: Record<string, { id: string; text: string; icon: React.ReactNode }>;
};

const Menu: FC<MenuProps> = ({ links = dashboardLinks }) => {
    return (
        <nav className="fixed w-[270px] h-screen bg-white flex flex-col">
            <div className="flex items-center gap-1 p-3 mt-5">
                <Airplane width={30} height={30} />
                <h2 className="font-semibold text-[20px]">Travel Portal</h2>
            </div>
            <ul className="p-3">
                {Object.values(links).map(({ id, icon, text }) => {
                    const linkHref = `/${id}`;
                    return (
                        <li key={text} className="p-2">
                            <Link href={linkHref}>
                                <button className="flex items-center font-medium w-full rounded-2xl hover:bg-slate-200 p-[3px]">
                                    <span className="p-2">{icon}</span>
                                    <span>{text}</span>
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="absolute bottom-0 p-4">
                <Link href={"/dashboard/settings"}>
                    <button className="flex items-center font-medium w-[150px] rounded-2xl hover:bg-slate-300 p-[3px]">
                        <span className="p-2">
                            <Settings />
                        </span>
                        <span>Settings</span>
                    </button>
                </Link>
                <button className="flex items-center font-medium w-[150px] rounded-2xl hover:bg-slate-300 p-[3px]">
                    <span className="p-2">
                        <Logout />
                    </span>
                    <span>Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default Menu;
