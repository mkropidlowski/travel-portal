import getAllPosts from "@/app/helpers/getAllPost";

const Blog = async ({ params }: { params: { slug: string } }) => {
    const posts = await getAllPosts();
    const slug = decodeURIComponent(params.slug);

    return <div className="relative top-[150px]">hello slug: {slug}</div>;
};

export default Blog;
