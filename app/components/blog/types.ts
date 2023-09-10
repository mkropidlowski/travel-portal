import { StaticImageData } from "next/image";

export type PostProps = {
    id?: string;
    title?: string;
    text?: string;
    image?: StaticImageData | any;
    date?: string;
};
