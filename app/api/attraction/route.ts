import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            location,
            locationGeo,
            image,
            hotelAmenities,
            pricePerDay,
            currency,
            photos,
            reviews,
            averageGrade,
            isAllInclusive,
            allAmenities,
            description,
            isFreeCancelation,
        } = body;

        const newAttraction = await prisma.attaction.create({
            data: {
                name,
                location,
                locationGeo,
                image,
                hotelAmenities,
                pricePerDay,
                currency,
                photos,
                reviews,
                averageGrade,
                isAllInclusive,
                allAmenities,
                description,
                isFreeCancelation,
            },
        });
        return NextResponse.json(newAttraction);
    } catch (err) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const attraction = await prisma.attaction.findMany({});
        return NextResponse.json(attraction);
    } catch (err) {
        return NextResponse.json({ message: "GET ERROR" }, { status: 500 });
    }
}
