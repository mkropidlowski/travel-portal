export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full h-full flex items-center flex-col m-auto bg-dashboardBg">{children}</div>
        </>
    );
}
