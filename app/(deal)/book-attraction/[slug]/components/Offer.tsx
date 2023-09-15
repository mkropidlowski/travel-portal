import { BE_Attraction } from "@/types/types";
import { FC, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/button/button";

const Offer: FC<BE_Attraction> = ({
    _id,
    name,
    image,
    pricePerDay,
    location,
    locationGeo,
    currency,
    totalPrice,
    numberOfDays,
    dateRange,
}) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex gap-6 shadow-xl rounded-md p-4 h-[300px]">
                <div className="relative w-[200px] h-[200px]">
                    <Image src={image} alt={name} fill style={{ objectFit: "cover" }} className="rounded-lg" />
                </div>
                <div className="p-3">
                    <h2 className="font-medium">{name}</h2>
                    <h2 className="text-sm">{location}</h2>
                    <div>
                        {totalPrice === 0 ? (
                            <p className="mt-3 font-medium text-sm text-green-700">Choose date range.</p>
                        ) : (
                            <div className="flex flex-col items-center gap-4">
                                <div className="bg-green-100 p-4 rounded-md mt-5">
                                    <h3>
                                        <span className="font-medium">Range: </span>
                                        {dateRange}
                                    </h3>
                                    <h3>
                                        <span className="font-medium">Time of visit: </span>
                                        {numberOfDays}
                                    </h3>
                                    <h3>
                                        <span className="font-medium">Total price: </span>
                                        {totalPrice} {currency}
                                    </h3>
                                </div>
                                <div>
                                    <Button type="button" secondary onClick={() => setShowForm(!showForm)}>
                                        Next step
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showForm ? <div className="h-[600px]">tu będzie form</div> : null}
        </div>
    );
};

export default Offer;
