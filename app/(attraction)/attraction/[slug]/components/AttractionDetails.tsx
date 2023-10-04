"use client";
import Button from "@/app/components/button/button";
import { Checked } from "@/app/components/icons";
import { BE_Attraction } from "@/types/types";
import Image from "next/image";
import { FC, useState } from "react";
import { amenitiesCategory } from "./helpers/data";
import { useRouter } from "next/navigation";
import ErrorBox from "@/app/components/atoms/errorBox";
import ModalWrapper from "@/app/components/modal/modalWrapper";

const AttractionDetails: FC<BE_Attraction> = ({
    _id,
    name,
    description,
    allAmenities,
    image,
    isAllInclusive,
    pricePerDay,
    location,
    hotelAmenities,
    photos,
    reviews,
    averageGrade,
    currency,
    isFreeCancellation,
}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const router = useRouter();
    const minimumDays = (pricePerDay as number) * 5;
    const amenitiesMap: any = {
        "Property amenities": allAmenities?.propertyAmenities || [],
        "Room amenities": allAmenities?.roomAmenities || [],
        "Wellness / Spa": allAmenities?.wellnessSpa || [],
        Accessibility: allAmenities?.accessibility || [],
        "For children": allAmenities?.forChildren || [],
    };

    const handleBookAttraction = () => {
        router.replace(`/book-attraction/${_id}`);
    };
    const handleImageFullScreen = (index: any) => {
        setSelectedImageIndex(index);
    };

    const closeImageFullScreen = () => {
        setSelectedImageIndex(null);
    };
    return (
        <>
            {name ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="relative top-[-60px] w-screen h-[450px]">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            style={{ objectFit: "cover", objectPosition: "bottom" }}
                            className="relative"
                        />
                    </div>
                    <div
                        className="relative md:top-[-200px] top-[-300px] bg-white rounded-md z-10 flex flex-col justify-center items-center md:min-w-[1140px] w-[300px] h-auto shadow-lg p-4 gap-5 mb-[100px]"
                        id={_id}
                    >
                        <div className="md:w-[900px] w-[300px] flex md:justify-around items-center lg:flex-row flex-col">
                            <div className="relative md:w-[400px] md:h-[400px] w-[290px] h-[290px]">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-[20px] md:max-w-[450px] w-[280px] text-center">
                                <div>
                                    <h2 className="text-[25px] font-medium">{name}</h2>
                                    <h4>{location}</h4>
                                </div>
                                <div className="text-left p-2">
                                    <h2>
                                        Rating:{" "}
                                        <span className="font-medium">
                                            {averageGrade}/10 ({reviews})
                                        </span>
                                    </h2>
                                </div>
                                <div className="md:w-[410px] w-[280px] md:h-[180px] h-[200px] bg-lime-100 rounded-lg font-medium text-left p-4">
                                    <div className="flex gap-3 mt-3">
                                        {isAllInclusive ? (
                                            <p className="text-green-900 flex items-center gap-2">
                                                <Checked className="w-[24px] h-[24px]" /> All-inclusive
                                            </p>
                                        ) : null}

                                        <p className="text-green-900 flex items-center gap-2">
                                            <Checked className="w-[24px] h-[24px]" />
                                            {isFreeCancellation ? "Free cancellation" : "Paid cancellation"}
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <h2>
                                            Book for 5 nights - {minimumDays} {currency}
                                        </h2>
                                    </div>
                                    <div className="mt-3">
                                        <Button
                                            type="button"
                                            secondary
                                            className="bg-green-900 font-medium"
                                            onClick={handleBookAttraction}
                                        >
                                            View deal
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:min-w-[900px] w-[290px] flex flex-wrap gap-[10px]">
                            {photos?.map((photo, i) => (
                                <div key={i} className="relative w-[90px] h-[90px] cursor-pointer">
                                    <Image
                                        src={photo}
                                        alt={""}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-lg"
                                        key={i}
                                        onClick={() => handleImageFullScreen(i)}
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="border-t-[2px] border-gray p-3 w-full"></span>
                        <div className="md:w-[900px] w-[290px]">
                            <h2 className="text-[20px]">
                                About <span className="font-medium">{name}</span>
                            </h2>
                            <p className="p-3 text-sm">{description}</p>
                        </div>
                        <span className="border-t-[2px] border-gray p-3 w-full"></span>
                        <div className="md:w-[900px] w-[290px] flex flex-col md:items-center items-center">
                            <h2 className="text-[20px]">Our Amenities</h2>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 p-3">
                                {hotelAmenities?.map((amenities, i) => (
                                    <p
                                        key={i}
                                        className="pl-3 leading-8 bg-blue-700 font-medium text-white w-[150px] rounded-full cursor-pointer"
                                    >
                                        {amenities}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {allAmenities ? (
                            <div className="md:min-w-[90%] w-[290px] md:items-center items-center">
                                <h2 className="text-[20px] font-medium">More accessibility:</h2>
                                <div className="grid md:grid-cols-5 gap-3">
                                    {amenitiesCategory.map((categoryName) => (
                                        <div key={categoryName} className="p-4">
                                            <h3 className="font-semibold text-sm mb-2">{categoryName}</h3>
                                            <ul>
                                                {amenitiesMap[categoryName]?.map((item: string, index: number) => (
                                                    <li key={index} className="text-xs">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : (
                <ErrorBox
                    text="Attracion not found"
                    isReturnButton
                    returnButtonText="Return to home page"
                    returnHref="/"
                />
            )}

            <ModalWrapper
                onClose={closeImageFullScreen}
                show={selectedImageIndex !== null}
                maxWidth={800}
                maxChildrenHeight="90vh"
                isBackgroundBlur
                bgColor="whitesmoke"
            >
                {selectedImageIndex !== null && photos && photos[selectedImageIndex] && (
                    <Image
                        src={photos[selectedImageIndex]}
                        alt=""
                        style={{ objectFit: "cover" }}
                        quality={100}
                        className="rounded-lg"
                        width={700}
                        height={700}
                    />
                )}
            </ModalWrapper>
        </>
    );
};

export default AttractionDetails;
