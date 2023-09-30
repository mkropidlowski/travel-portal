export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full max-h-max flex items-center flex-col m-auto bg-slate-400">{children}</div>
        </>
    );
}
