"use client";
import { FC, HTMLProps, useState } from "react";
import { menuLinks } from "@/app/config/navbar/data";
import Link from "next/link";
import Button from "../button/button";
import clsx from "clsx";

type NavbarProps = {
    links?: Record<string, { id: string; text: string }>;
};

const Navbar: FC<NavbarProps & HTMLProps<HTMLDivElement>> = ({ links = menuLinks }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav
            className={clsx(
                "fixed top-0 flex flex-wrap justify-around items-center w-full xl:h-[100px] h-[80px] shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] z-[100] text-black",
                isMobileMenuOpen ? "bg-white" : "bg-black"
            )}
        >
            <div
                className={clsx(
                    "md:w-[350px] min-w-[200px] text-center p-3 rounded cursor-pointer",
                    isMobileMenuOpen ? "bg-white" : null
                )}
            >
                <h2
                    className={clsx(
                        "md:text-[30px] text-[18px] font-semibold tracking-[1px]",
                        isMobileMenuOpen ? "text-black" : "text-white"
                    )}
                >
                    Aventure Abound
                </h2>
            </div>
            <div className={clsx("me-[-25px] xl:hidden relative right-3", isMobileMenuOpen ? "p-2" : "p-2")}>
                <button
                    type="button"
                    onClick={handleMobileMenuToggle}
                    name="menu button"
                    aria-label="Menu"
                    className={clsx("p-2 rounded-[50%] focus:outline-none bg-white", {
                        " bg-gray-100": isMobileMenuOpen,
                    })}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <ul
                className={clsx(
                    "flex items-center gap-[35px] text-base font-medium ",
                    isMobileMenuOpen
                        ? "flex-col bg-white w-full z-10 gap-[10px] text-center p-3 mb-4"
                        : "hidden xl:flex"
                )}
            >
                {Object.values(links).map(({ id, text }) => {
                    const linkHref = `/#${id}`;

                    return (
                        <li key={text}>
                            <Link href={linkHref}>
                                <Button type="button" primary className={clsx(isMobileMenuOpen ? "w-[200px]" : "")}>
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
