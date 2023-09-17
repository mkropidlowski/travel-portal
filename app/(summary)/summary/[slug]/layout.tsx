import Navbar from "@/app/components/navbar/navbar";

export default async function SummaryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="max-w-[1140px] h-screen flex items-center flex-col m-auto">{children}</div>
        </>
    );
}
