"use client";
import Image from "next/image";
import { FC } from "react";
import { PostProps } from "../types";
import { useRouter } from "next/navigation";

const Post: FC<PostProps> = ({ _id, title, text, image, date }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/${_id}`);
    };
    return (
        <div
            className="md:min-w-[550px] w-[300px] md:h-[250px] h-[400px] flex md:flex-row flex-col shadow-lg cursor-pointer"
            id={_id}
            onClick={handleClick}
        >
            <div className="md:w-[50%] w-full md:h-[250px] h-full relative">
                <Image src={image} alt={""} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="md:w-[50%] w-full md:h-full h-[150px] p-4 flex flex-col justify-start md:gap-[40px] gap-[10px] hover:bg-slate-100">
                <h3 className="font-bold">{date}</h3>
                <h2 className="text-xl">{title}</h2>
            </div>
        </div>
    );
};

export default Post;
