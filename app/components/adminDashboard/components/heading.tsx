import clsx from "clsx";
import { FC } from "react";

type HeadingProps = {
    title: string;
    descritpion: string;
    icon?: React.ReactNode;
    className?: string;
};

const Heading: FC<HeadingProps> = ({ title, descritpion, icon, className, ...rest }) => (
    <div className={clsx(`flex flex-row bg-white p-4 w-full rounded-2xl`, className)} {...rest}>
        <div className="w-[70%]">
            <h2 className="text-[25px] font-medium p-2">{title}</h2>
            <p className="text-[15px] p-2">{descritpion}</p>
        </div>
        <div className="w-[30%]">{icon}</div>
    </div>
);

export default Heading;
