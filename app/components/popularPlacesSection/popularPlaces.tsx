import getDataFromCollection from "@/app/helpers/getDataFromCollection";
import Attraction from "./components/atraction";
import { BE_Attraction } from "@/types/types";
import Button from "../button/button";
import Link from "next/link";

const PopularPlaces = async () => {
    const attraction = await getDataFromCollection("attraction", 3);
    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <div className="flex md:flex-row flex-col justify-center items-center m-auto mt-[35px] gap-[45px]">
                {attraction.documents.map((attraction: BE_Attraction) => (
                    <Attraction
                        key={attraction?._id}
                        _id={attraction?._id}
                        name={attraction?.name}
                        location={attraction?.location}
                        pricePerDay={attraction?.pricePerDay}
                        image={attraction?.image}
                        currency={attraction?.currency}
                        allAmenities={{
                            propertyAmenities: undefined,
                            roomAmenities: undefined,
                            wellnessSpa: undefined,
                            accessibility: undefined,
                            forChildren: undefined,
                        }}
                    />
                ))}
            </div>
            <div>
                <Link href={"/all-attraction"}>
                    <Button type="button" secondary className="bg-orange-600 text-xl hover:bg-orange-700">
                        <span className="font-normal">Explore more...</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PopularPlaces;
