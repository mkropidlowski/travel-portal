import Attraction from "@/app/components/popularPlacesSection/components/atraction";
import getDataFromCollection from "@/app/helpers/getDataFromCollection";
import { BE_Attraction } from "@/types/types";

const AttractionPage = async () => {
    const attraction = await getDataFromCollection("attraction");
    return (
        <div className="max-w-[1240px] flex md:flex-row flex-col flex-wrap justify-center items-center m-auto mt-[135px] gap-[45px]">
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
    );
};

export default AttractionPage;