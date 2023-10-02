"use client";
import { BE_Attraction } from "@/types/types";
import Image from "next/image";
import { FC, useState } from "react";
import Button from "../../button/button";
import { Checked } from "../../icons";
import ModalWrapper from "../../modal/modalWrapper";

const AttractionBox: FC<BE_Attraction> = ({
    _id,
    name,
    location,
    locationGeo,
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
    return (
        <div
            className="flex w-[400px] h-[200px] bg-white rounded-2xl hover:cursor-pointer hover:bg-stone-100 border border-gray shadow-sm"
            id={_id}
        >
            <div className="flex flex-col gap-2 p-2">
                <div className="w-[140px] h-[140px] relative overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-200 ease-in-out transform hover:scale-110 rounded-lg hover:rounded-lg"
                    />
                </div>
                <div className="">
                    <Button type="button" secondary className="bg-orange-400" onClick={() => setShowModal(true)}>
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
            >
                XD
            </ModalWrapper>
        </div>
    );
};
export default AttractionBox;
