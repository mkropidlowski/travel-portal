import Post from "@/app/components/blog/components/post";
import { PostProps } from "@/app/components/blog/types";
import getDataFromCollection from "@/app/helpers/getDataFromCollection";

const AllPostPage = async () => {
    const posts = await getDataFromCollection("blog");
    return (
        <div className="max-w-[1240px] flex md:flex-row flex-col flex-wrap justify-center items-center m-auto mt-[135px] gap-[45px]">
            {posts.documents.map((post: PostProps) => (
                <Post key={post._id} {...post} />
            ))}
        </div>
    );
};

export default AllPostPage;
