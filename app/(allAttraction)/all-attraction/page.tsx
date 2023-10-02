import Attraction from "@/app/components/popularPlacesSection/components/atraction";
import getDataFromCollection from "@/app/helpers/getDataFromCollection";
import { BE_Attraction } from "@/types/types";

const AttractionPage = async () => {
    const attraction = await getDataFromCollection("attraction");
    return (
        <div className="max-w-[1240px] flex md:flex-row flex-col flex-wrap justify-center items-center m-auto mt-[135px] gap-[35px]">
            {attraction.documents.map((attraction: BE_Attraction) => (
                <Attraction key={attraction?._id} {...attraction} />
            ))}
        </div>
    );
};

export default AttractionPage;
