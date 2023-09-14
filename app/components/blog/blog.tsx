import Link from "next/link";
import Button from "../button/button";
import Post from "./components/post";
import { PostProps } from "./types";
import getDataFromCollection from "@/app/helpers/getDataFromCollection";

const Blog = async () => {
    const posts = await getDataFromCollection("blog", 4);
    return (
        <div className="w-full flex flex-col gap-7 justify-center items-center">
            <div className="h-full flex flex-col md:flex-row flex-wrap justify-center items-center m-auto mt-[35px] gap-[45px]">
                {posts.documents.map((post: PostProps) => (
                    <Post key={post._id} _id={post._id} title={post.title} date={post.date} image={post.image} />
                ))}
            </div>
            <div>
                <Link href={"/all-posts"}>
                    <Button type="button" secondary className="bg-orange-600 text-xl hover:bg-orange-700">
                        <span className="font-normal">Explore more...</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Blog;
