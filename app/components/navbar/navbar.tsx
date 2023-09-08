import { FC, HTMLProps } from "react";
import { menuLinks } from "@/app/config/navbar/data";
import Link from "next/link";
import Button from "../button/button";
import clsx from "clsx";

type NavbarProps = {
    links?: Record<string, { id: string; text: string }>;
};

const Navbar: FC<NavbarProps & HTMLProps<HTMLDivElement>> = ({ links = menuLinks }) => {
    return (
        <nav
            className={clsx(
                "fixed top-0 flex flex-wrap justify-around items-center  w-full md:h-[90px] shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] h-navBarHeight z-[100] text-black"
            )}
        >
            <div className="bg-white w-[320px] text-center p-3 rounded-lg cursor-pointer">
                <h2 className="text-[30px] font-semibold tracking-[1px] text-black">Aventure Abound</h2>
            </div>
            <ul className="flex items-center gap-[35px]">
                {Object.values(links).map(({ id, text }) => {
                    const linkHref = `/#${id}`;

                    return (
                        <li key={text}>
                            <Link href={linkHref}>
                                <Button type="button" primary>
                                    {text}
                                </Button>
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <Link href={"/booking"}>
                        <Button type="button" secondary>
                            Book now
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
