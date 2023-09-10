import { PostProps } from "@/app/components/blog/types";
import china from "@/app/components/popularPlacesSection/components/helpers/images/china.jpeg";

export const PostMock: PostProps[] = [
    {
        id: "1",
        title: "Travel Plan is a long established fact that a reader.",
        date: "July 25, 2023",
        image: china,
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
    },
    {
        id: "2",
        image: china,
        date: "Aug 15, 2023",
        title: "Cheap Rates is a long established fact that.",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
    },
    {
        id: "3",
        image: china,
        date: "July 25, 2023",
        title: "Hand-picked tours is a long established fact that a reader.",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
    },
];
