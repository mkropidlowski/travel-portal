import getSingleRecord from "@/app/helpers/getSingleRecord";
import Post from "./components/Post";
import Blog from "@/app/components/blog/blog";

const BlogPage = async ({ params }: { params: { slug: string } }) => {
    const slug = decodeURIComponent(params.slug);
    const post = await getSingleRecord(slug, "blog");

    return (
        <div className="max-w-[1200px] flex flex-col items-center justify-center relative top-[150px]">
            <Post
                _id={slug}
                title={post.document?.title}
                text={post.document?.text}
                image={post.document?.image}
                date={post.document?.date}
                author={post.document?.author}
                likeCount={post.document?.likeCount}
                comments={post.document?.comments}
            />
            <div className="p-4">
                <h1 className="lg:max-w-[950px] w-fit md:text-[55px] text-[35px] font-bold md:p-20 p-2 text-center">
                    See also similar posts
                </h1>
            </div>

            <Blog />
        </div>
    );
};

export default BlogPage;
