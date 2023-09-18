import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            tripId,
            dataRange,
            numberOfDays,
            totalPrice,
            name,
            surname,
            email,
            phone,
            street,
            houseNumber,
            locality,
            postalCode,
            firstParticipantName,
            firstParticipantSurname,
            firstParticipantGender,
            firstParticipantPhone,
            firstParticipantBirthDate,
            secondParticipantBirthDate,
            secondParticipantGender,
            secondParticipantName,
            secondParticipantPhone,
            secondParticipantSurname,
        } = body;

        const newReservation = await prisma.reservation.create({
            data: {
                tripId,
                dataRange,
                totalPrice,
                numberOfDays,
                name,
                surname,
                email,
                phone,
                street,
                houseNumber,
                locality,
                postalCode,
                firstParticipantName,
                firstParticipantSurname,
                firstParticipantGender,
                firstParticipantPhone,
                firstParticipantBirthDate,
                secondParticipantBirthDate,
                secondParticipantGender,
                secondParticipantName,
                secondParticipantPhone,
                secondParticipantSurname,
            },
        });
        return NextResponse.json(newReservation);
    } catch (err) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}
