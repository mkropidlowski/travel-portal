import { FC } from "react";
import { dashboardLinks } from "./helpers/menuLinks";
import Link from "next/link";
import Airplane from "../../icons/Airplane";

type MenuProps = {
    links?: Record<string, { id: string; text: string; icon: React.ReactNode }>;
};

const Menu: FC<MenuProps> = ({ links = dashboardLinks }) => {
    return (
        <nav className="w-[230px] h-full bg-white flex flex-col">
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
        </nav>
    );
};

export default Menu;
