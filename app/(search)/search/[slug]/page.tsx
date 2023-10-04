import Button from "@/app/components/button/button";
import { Adventure, Map } from "@/app/components/icons";
import Attraction from "@/app/components/popularPlacesSection/components/atraction";
import getDataFromCollection from "@/app/helpers/getDataFromCollection";
import { BE_Attraction } from "@/types/types";
import Link from "next/link";

const SearchPage = async ({ params }: { params: { slug: string } }) => {
    const slug = decodeURIComponent(params.slug);
    const attraction = await getDataFromCollection("Attaction");

    const filterAttraction = attraction.documents.filter((filterRecords: any) => filterRecords.locationGeo === slug);

    return (
        <div className="max-w-[1200px] flex flex-col justify-center items-center m-auto mt-[80px] gap-[35px]">
            <div className="md:w-[1000px] w-[300px] md:h-[250px] h-[300px] flex justify-center gap-7 items-center bg-slate-100 rounded-b-xl">
                {filterAttraction.length === 0 ? (
                    <div className="flex md:flex-row flex-col items-center text-center">
                        <Map width={200} height={200} />
                        <h2 className="md:text-[40px] text-[25px] font-semibold">Sorry, no attraction available</h2>
                    </div>
                ) : (
                    <div className="flex md:flex-row flex-col items-center text-center">
                        <Adventure width={200} height={200} />
                        <h2 className="md:text-[40px] text-[25px]">Attraction in {slug}</h2>
                    </div>
                )}
            </div>
            <div className="w-full flex md:flex-row flex-col flex-wrap justify-center items-center m-auto gap-[35px]">
                {filterAttraction.length === 0 ? (
                    <div className="flex gap-5 md:flex-row flex-col">
                        <Link href="/">
                            <Button type="button" primary>
                                Return to homepage
                            </Button>
                        </Link>
                        <Link href="/all-attraction">
                            <Button type="button" secondary>
                                View all attraction!
                            </Button>
                        </Link>
                    </div>
                ) : (
                    filterAttraction.map((attraction: BE_Attraction) => (
                        <Attraction
                            key={attraction?._id}
                            _id={attraction?._id}
                            name={attraction?.name}
                            location={attraction?.location}
                            pricePerDay={attraction?.pricePerDay}
                            image={attraction?.image}
                            currency={attraction?.currency}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchPage;
