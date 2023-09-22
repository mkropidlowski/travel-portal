import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type BE_Attraction = {
    _id: string;
    name: string;
    location?: string;
    locationGeo?: string;
    date?: string;
    description?: string;
    image: string | StaticImageData | StaticImport;
    hotelAmenities?: string[];
    pricePerDay?: number;
    currency?: string;
    photos?: string[];
    reviews?: number;
    averageGrade?: string;
    isAllInclusive?: boolean;
    isFreeCancellation?: boolean;
    dateRange?: string;
    totalPrice?: number;
    numberOfDays?: number;
    allAmenities?: {
        propertyAmenities?: string[];
        roomAmenities?: string[];
        wellnessSpa?: string[];
        accessibility?: string[];
        forChildren?: string[];
    };
};

export type BE_BookingForm = {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    street?: string;
    houseNumber?: number;
    locality?: string;
    postalCode?: string;
    birthDate?: string;
    gender?: string;
};

export type BE_Reservation = {
    tripId?: string;
    dataRange?: string;
    totalPrice?: number;
    numberOfDays?: number;
};

export type FormReservation = {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    street?: string;
    houseNumber?: string;
    locality?: string;
    postalCode?: string;
    birthDate?: string;
    gender?: string;
    tripId?: string;
    dataRange?: string;
    totalPrice?: number;
    numberOfDays?: number;
    firstParticipantName?: string;
    firstParticipantSurname?: string;
    firstParticipantGender?: string;
    firstParticipantPhone?: string;
    firstParticipantBirthDate?: string;
    secondParticipantBirthDate?: string;
    secondParticipantGender?: string;
    secondParticipantName?: string;
    secondParticipantPhone?: string;
    secondParticipantSurname?: string;
};
