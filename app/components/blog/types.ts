import { StaticImageData } from "next/image";

export type PostProps = {
    _id: string;
    title: string;
    text?: string;
    image: StaticImageData | any;
    date: string;
    author?: string;
    likeCount?: number;
    comments?: [x: string];
};
