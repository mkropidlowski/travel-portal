import Post from "./components/post";
import { PostProps } from "./types";
import getDataFromCollection from "@/app/helpers/getDataFromCollection";

const Blog = async () => {
    const posts = await getDataFromCollection("blog");
    return (
        <div className="min-w-[1200px] h-full flex flex-col md:flex-row flex-wrap justify-center items-center m-auto mt-[35px] gap-[45px]">
            {posts.documents.map((post: PostProps) => (
                <Post key={post._id} _id={post._id} title={post.title} date={post.date} image={post.image} />
            ))}
        </div>
    );
};

export default Blog;
