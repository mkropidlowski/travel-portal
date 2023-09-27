"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthContextProvider {
    children: React.ReactNode;
    session: any;
}

export default function AuthContext({ children, session }: AuthContextProvider) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
