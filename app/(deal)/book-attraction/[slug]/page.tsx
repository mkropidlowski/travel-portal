import getSingleRecord from "@/app/helpers/getSingleRecord";
import dynamic from "next/dynamic";

const BookingDetails = dynamic(() => import("../[slug]/components/BookingDetails"), { ssr: false });

const BookAttractionPage = async ({ params }: { params: { slug: string } }) => {
    const slug = decodeURIComponent(params.slug);
    const attraction = await getSingleRecord(slug, "Attaction");

    return (
        <div className="md:min-w-[1200px] w-[320px] flex flex-col items-center justify-center relative top-[150px]">
            <BookingDetails
                _id={slug}
                name={attraction.document?.name}
                description={attraction.document?.description}
                image={attraction.document?.image}
                date={attraction.document?.date}
                location={attraction.document?.location}
                locationGeo={attraction.document?.locationGeo}
                hotelAmenities={attraction.document?.hotelAmenities}
                pricePerDay={attraction.document?.pricePerDay}
                currency={attraction.document?.currency}
                photos={attraction.document?.photos}
                reviews={attraction.document?.reviews}
                averageGrade={attraction.document?.averageGrade}
                isAllInclusive={attraction.document?.isAllInclusive}
                isFreeCancellation={attraction.document?.isFreeCancellation}
                allAmenities={attraction.document?.allAmenities}
            />
        </div>
    );
};

export default BookAttractionPage;
