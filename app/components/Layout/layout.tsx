import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full h-full">
        <Navbar />
        <Hero />
        <main>{children}</main>
    </div>
);

export default Layout;
