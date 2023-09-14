"use client";
import { FC } from "react";
import Image from "next/image";
import Button from "../../button/button";
import { BE_Attraction } from "@/types/types";
import { useRouter } from "next/navigation";

const Attraction: FC<BE_Attraction> = ({ _id, name, image, pricePerDay, currency }) => {
    const minimumDays = (pricePerDay as number) * 5;
    const router = useRouter();

    const handleRouter = () => {
        router.push(`/attraction/${_id}`);
    };
    return (
        <div className="md:w-[350px] w-[290px] h-[550px]" id={_id}>
            <div className="h-[400px] relative overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-200 ease-in-out transform hover:scale-110
                    "
                />
            </div>
            <div className="flex flex-col gap-[15px] items-start p-4 bg-zinc-100">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-zinc-500">
                    <span className="font-medium text-black">
                        5 days, 6 nights start from - {minimumDays} {currency}
                    </span>
                </p>
                <Button type="button" secondary onClick={handleRouter}>
                    Book now
                </Button>
            </div>
        </div>
    );
};

export default Attraction;
