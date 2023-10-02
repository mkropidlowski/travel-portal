"use client";
import { BE_Attraction } from "@/types/types";
import Image from "next/image";
import { FC, useState } from "react";
import Button from "../../button/button";
import { Checked } from "../../icons";
import ModalWrapper from "../../modal/modalWrapper";
import { useRouter } from "next/navigation";

const AttractionBox: FC<BE_Attraction> = ({
    _id,
    id,
    name,
    location,
    description,
    image,
    hotelAmenities,
    pricePerDay,
    photos,
    currency,
    reviews,
    averageGrade,
    allAmenities,
    isAllInclusive,
    isFreeCancellation,
}) => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleRouterToFullOffer = (tripId: string) => {
        router.push(`/attraction/${tripId}`);
    };
    return (
        <div
            className="flex w-[400px] h-[200px] bg-white rounded-2xl hover:cursor-pointer hover:bg-stone-100 border border-gray shadow-md"
            id={id}
        >
            <div className="flex flex-col gap-2 p-2">
                <div className="w-[140px] h-[140px] relative overflow-hidden">
                    <Image src={image} alt={name} fill style={{ objectFit: "cover" }} className="rounded-lg" />
                </div>
                <div className="h-[35px]">
                    <Button
                        type="button"
                        secondary
                        className="bg-orange-400 hover:bg-orange-600 h-[35px]"
                        onClick={() => setShowModal(true)}
                    >
                        Show more
                    </Button>
                </div>
            </div>
            <div>
                <ul className="p-2 font-medium">
                    <li>Location: {location}</li>
                    <li>
                        Price/day: {pricePerDay} {currency}
                    </li>
                    <li>
                        Reviews: {reviews} / {averageGrade}
                    </li>
                </ul>
                <div className="p-2">
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
            </div>
            <ModalWrapper
                onClose={() => setShowModal(false)}
                show={showModal}
                title="All information about trip."
                maxWidth={600}
                bgColor="whitesmoke"
            >
                <div className="w-full">
                    <div className="w-[500px] flex flex-wrap gap-[10px]">
                        {photos?.map((photo, i) => (
                            <div key={i} className="relative w-[100px] h-[100px] cursor-pointer">
                                <Image
                                    src={photo}
                                    alt={""}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="w-[500px]">
                        <h2 className="text-[20px]">
                            About <span className="font-medium">{name}</span>
                        </h2>
                        <p className="p-3 text-xs">{description}</p>
                    </div>

                    <div className="w-[500px] flex flex-col md:items-center items-center">
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
                        <Button
                            type="button"
                            secondary
                            className="bg-orange-400 hover:bg-orange-600 text-white text-base active:border-[0]"
                            onClick={() => handleRouterToFullOffer(id as string)}
                        >
                            View full offer on main page
                        </Button>
                    </div>
                </div>
            </ModalWrapper>
        </div>
    );
};
export default AttractionBox;
