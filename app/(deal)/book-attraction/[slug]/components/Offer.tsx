import { BE_Attraction } from "@/types/types";
import { FC, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/button/button";
import SummaryPage from "@/app/(summary)/summary/[slug]/page";

const Offer: FC<BE_Attraction> = ({ _id, name, image, location, currency, totalPrice, numberOfDays, dateRange }) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [adultsPriceCount, setAdultsPriceCount] = useState<number>(1);
    const [priceIfAdultSet, setPriceIfAdultSet] = useState(totalPrice as number);

    const priceIfAdultsChange = (value: number) => {
        const newPrice = value * (totalPrice as number);
        setPriceIfAdultSet(value);
        setAdultsPriceCount(newPrice);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex md:flex-row flex-col gap-6 shadow-xl rounded-md p-4 md:h-[330px] h-[600px]">
                <div className="relative md:w-[200px] md:h-[200px] w-[300px] h-[300px]">
                    <Image src={image} alt={name} fill style={{ objectFit: "cover" }} className="rounded-lg" />
                </div>
                <div className="p-3">
                    <h2 className="font-medium">{name}</h2>
                    <h2 className="text-sm">{location}</h2>
                    <div>
                        {totalPrice === 0 ? (
                            <p className="mt-3 font-medium text-sm">Choose date range.</p>
                        ) : (
                            <div className="flex flex-col items-center gap-4">
                                <div className="bg-neutral-100 p-4 rounded-md mt-3 flex flex-col gap-2">
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
                                        {adultsPriceCount === 1 ? (
                                            <span>
                                                {totalPrice} {currency}
                                            </span>
                                        ) : (
                                            <span>
                                                {adultsPriceCount} {currency}
                                            </span>
                                        )}
                                    </h3>
                                    <h3>
                                        <form>
                                            <label htmlFor="" className="font-medium">
                                                Adults:{" "}
                                            </label>
                                            <input
                                                type="number"
                                                max={4}
                                                min={1}
                                                className="p-1 w-[90px] h-[27px] rounded-sm border border-x-emerald-700"
                                                placeholder="Choose"
                                                onChange={(e) => priceIfAdultsChange(parseInt(e.target.value))}
                                            ></input>
                                        </form>
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

            {showForm ? (
                <div className="h-fit">
                    <SummaryPage
                        dataRange={dateRange}
                        totalPrice={adultsPriceCount}
                        numberOfDays={numberOfDays}
                        tripId={_id}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Offer;
