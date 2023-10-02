import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await prisma.user.findMany();
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({ message: "GET ERROR" }, { status: 500 });
    }
}
