import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    let json = await request.json();
    try {
        const reservationStatus = await prisma.reservation.update({
            where: { id },
            data: json,
        });
        return NextResponse.json(reservationStatus);
    } catch (error) {
        return NextResponse.json({ message: "GET ERROR" }, { status: 500 });
    }
}
