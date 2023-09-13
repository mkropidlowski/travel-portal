import { PostProps } from "@/app/components/blog/types";
import Image from "next/image";
import { FC } from "react";

const Post: FC<PostProps> = ({ _id, title, text, image, date, author, likeCount, comments }) => {
    return (
        <div
            className="md:min-w-[950px] w-[300px] flex md:flex-col flex-col shadow-lg items-center cursor-pointer relative "
            id={_id}
        >
            <div className="md:w-[70%] w-full h-[300px] relative md:h-[450px]">
                <Image src={image} alt={""} priority fill style={{ objectFit: "cover", objectPosition: "bottom" }} />
            </div>
            <div className="md:w-[80%] w-full md:h-full p-4 flex flex-col justify-start md:gap-[20px] gap-[10px] mt-8 mb-[100px]">
                <h3 className="font-bold">
                    {date} - {author}
                </h3>
                <h2 className="text-xl font-medium">{title}</h2>
                <p>{text}</p>
            </div>
            <div className="md:min-w-[500px] w-[300px] h-full shadow-xl p-6 rounded-lg md:mb-4 mb-0">
                <div className="w-full flex flex-row justify-between">
                    <h3 className="font-medium bg-slate-200 hover:bg-slate-300 rounded-full p-2 cursor-pointer">
                        Comments: {comments?.length}
                    </h3>
                    <h3 className="font-medium bg-slate-200 hover:bg-slate-300 rounded-full p-2 cursor-pointer">
                        Likes: {likeCount}
                    </h3>
                </div>
                <div className="p-4 flex flex-col gap-3">
                    {comments?.map((comment, id) => (
                        <div key={id} className="bg-slate-50 rounded-lg p-3">
                            <p>{comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post;
