import Navbar from "@/app/components/navbar/navbar";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="max-w-[1140px] max-h-max flex items-center flex-col m-auto">{children}</div>
        </>
    );
}
