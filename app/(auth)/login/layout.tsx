export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="max-w-[1140px] max-h-max flex items-center flex-col m-auto">{children}</div>
        </>
    );
}
