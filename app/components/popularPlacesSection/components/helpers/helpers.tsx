import hill from "./images/hill.webp";
import china from "./images/china.jpeg";
import india from "./images/india.webp";
import { StaticImageData } from "next/image";

export type AttractionType = {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
    price: string;
};

export const AttractionMock: AttractionType[] = [
    {
        id: "1",
        image: hill,
        title: "Casion Huber",
        description: "4 days, 5 nights start from",
        price: "$500",
    },
    {
        id: "2",
        image: india,
        title: "India Place",
        description: "4 days, 5 nights start from",
        price: "$550",
    },
    {
        id: "3",
        image: china,
        title: "China home town",
        description: "5 days, 6 nights start from",
        price: "$800",
    },
];
