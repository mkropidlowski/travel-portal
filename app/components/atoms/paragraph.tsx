import { FC, ReactNode } from "react";

type PargraphProps = {
    text: string;
    secondText: ReactNode;
};
const Paragraph: FC<PargraphProps> = ({ text, secondText }) => (
    <p className="p-1 px-2 bg-slate-100 text-sm rounded-md hover: cursor-pointer">
        <span className="font-medium">{text}: </span>
        <span>{secondText}</span>
    </p>
);

export default Paragraph;
