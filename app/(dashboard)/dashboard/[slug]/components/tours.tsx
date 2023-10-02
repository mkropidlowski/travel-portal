import Heading from "@/app/components/adminDashboard/components/heading";
import { Trip } from "@/app/components/icons";
import { getAttraction } from "@/app/helpers/getAttraction";
import { BE_Attraction } from "@/types/types";
import { use } from "react";
import AttractionBox from "@/app/components/adminDashboard/components/attractionBox";

const Tours = () => {
    const attractions = use(getAttraction());

    return (
        <div>
            <Heading
                title="Here you can find all of our trips."
                descritpion="You can find all important information about specific trip."
                icon={<Trip width={200} height={100} />}
            />
            <div className="flex flex-wrap gap-3 mt-[30px]">
                {attractions.map((attraction: BE_Attraction, i: number) => (
                    <AttractionBox key={i} {...attraction} />
                ))}
            </div>
        </div>
    );
};

export default Tours;
