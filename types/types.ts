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
    allAmenities?: {
        [x: string]: string[];
    };
};
