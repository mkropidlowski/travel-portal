export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./app/libs/auth";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("user-token")?.value;

    const verifiedToken =
        token &&
        (await verifyAuth(token).catch((err) => {
            console.log(err);
        }));

    if (req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
        return;
    }

    if (verifiedToken) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (req.url.includes("/login") && verifiedToken) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
}

export const config = { matcher: ["/dashboard", "/login"] };
