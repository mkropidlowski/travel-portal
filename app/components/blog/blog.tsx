import { PostMock } from "@/app/config/blog/data";
import Post from "./components/post";

const Blog = () => {
    return (
        <div className="max-w-[1200px] h-full flex flex-col md:flex-row flex-wrap justify-center items-center m-auto mt-[35px] gap-[45px]">
            {PostMock.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} date={post.date} image={post.image} />
            ))}
        </div>
    );
};

export default Blog;
