import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";

const font = Montserrat({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Travel Portal",
    description: "Travel Portal ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={font.className} suppressHydrationWarning>
                <AuthContext>
                    <ToasterContext />
                    {children}
                </AuthContext>
                <div id="modal-root"></div>
            </body>
        </html>
    );
}
