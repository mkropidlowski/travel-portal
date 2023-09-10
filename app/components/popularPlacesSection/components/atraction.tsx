import { FC } from "react";
import { AttractionType } from "./helpers/helpers";
import Image from "next/image";
import Button from "../../button/button";

const Attraction: FC<AttractionType> = ({ id, title, image, description, price }) => {
    return (
        <div className="md:w-[350px] w-[290px] h-[550px]" id={id}>
            <div className="h-[400px] relative overflow-hidden">
                <Image
                    src={image}
                    alt={description}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-200 ease-in-out transform hover:scale-110
                    "
                />
            </div>
            <div className="flex flex-col gap-[15px] items-start p-4 bg-zinc-100">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-zinc-500">
                    {description} <span className="font-medium text-black">{price}</span>
                </p>
                <Button type="button" secondary>
                    Book now
                </Button>
            </div>
        </div>
    );
};

export default Attraction;
