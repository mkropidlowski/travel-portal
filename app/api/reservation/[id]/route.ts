import { ReservationStatus } from "@prisma/client";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const ids = params.id;
    let json = await request.json();

    console.log(ids, json);

    try {
        const reservationStatus = await prisma.reservation.update({
            where: { id: ids },
            data: json,
        });
        return NextResponse.json(reservationStatus);
    } catch (error) {
        return NextResponse.json({ message: "GET ERROR" }, { status: 500 });
    }
}
