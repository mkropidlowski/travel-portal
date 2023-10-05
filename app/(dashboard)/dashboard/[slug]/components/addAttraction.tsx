"use client";
import Heading from "@/app/components/adminDashboard/components/heading";
import { FC, useRef, useState } from "react";
import { BE_Attraction } from "@/types/types";
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import InputList from "@/app/components/input/inputList";
const AddAttraction: FC = () => {
    const [hotelAmenitiesArray, setHotelAmenitiesArray] = useState<string[]>([]);
    const [photosArray, setPhotosArray] = useState<string[]>([]);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BE_Attraction>({ mode: "all" });

    const submitForm = async (data: BE_Attraction) => {
        const values = {
            ...data,
            currency: data.currency,
            hotelAmenities: hotelAmenitiesArray,
            photos: photosArray,
            pricePerDay: parseInt(data.pricePerDay),
            averageGrade: parseInt(data.averageGrade),
            reviews: parseInt(data.reviews),
        };
        console.log(values);

        try {
            await axios
                .post("/api/attraction", { ...values })
                .then(() => {
                    formRef.current?.reset();
                    toast.success("Great, attracion added.");
                })
                .catch((error) => {
                    toast.error("Invalid error, try again later.");
                    console.error("Form Error:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch (error) {
            console.error("Form error: ", error);
        }
    };
    return (
        <div className="flex flex-col gap-3">
            <Heading title="Here you can add new attaction." descritpion="Follow the instructions." />
            <form onSubmit={handleSubmit(submitForm)} ref={formRef} className="bg-white rounded-2xl p-3 shadow">
                <div className="w-full flex flex-wrap gap-3 p-3">
                    <Input type="text" key="name" id="name" label="Attraction name" {...register("name")} />
                    <Input type="text" key="location" id="location" label="Full location" {...register("location")} />
                    <Input
                        type="text"
                        key="locationGeo"
                        id="locationGeo"
                        label="Location - type country"
                        {...register("locationGeo")}
                    />
                    <Input type="text" key="image" id="image" label="Image" {...register("image")} />
                    <Input
                        type="number"
                        key="pricePerDay"
                        id="pricePerDay"
                        label="Price per day"
                        {...register("pricePerDay")}
                    />
                    <Input type="number" key="reviews" id="reviews" label="Reviews" {...register("reviews")} />
                    <Input
                        type="number"
                        key="averageGrade"
                        id="averageGrade"
                        step="0.1"
                        label="Average grade"
                        {...register("averageGrade")}
                    />

                    <Input
                        type="text"
                        key="description"
                        id="description"
                        label="Description"
                        {...register("description")}
                    />

                    <Input
                        type="text"
                        isError={!!errors.currency?.message}
                        errorText={errors.currency?.message}
                        list="currencyVariant"
                        label="Currency"
                        {...register("currency")}
                    />
                    <datalist id="currencyVariant">
                        <option value="€">€</option>
                        <option value="$">$</option>
                    </datalist>
                    <Input
                        type="checkbox"
                        key="isAllInclusive"
                        id="isAllInclusive"
                        label="Is All inclusive?"
                        {...register("isAllInclusive")}
                    />
                    <Input
                        type="checkbox"
                        key="isFreeCancelation"
                        id="isFreeCancelation"
                        label="Is Free Cancelation?"
                        {...register("isFreeCancelation")}
                    />
                </div>
                <div className="flex flex-flow items-start gap-3 p-3">
                    <InputList
                        addItems={(item) => setHotelAmenitiesArray([...hotelAmenitiesArray, item])}
                        deleteItems={(item) =>
                            setHotelAmenitiesArray(hotelAmenitiesArray.filter((hotelItem) => hotelItem !== item))
                        }
                        items={hotelAmenitiesArray}
                        label="Hotel amenities"
                    />
                    <InputList
                        addItems={(item) => setPhotosArray([...photosArray, item])}
                        deleteItems={(item) => setPhotosArray(photosArray.filter((photoItem) => photoItem !== item))}
                        items={photosArray}
                        label="More photos"
                    />
                </div>

                <div className="m-auto mt-[30px]">
                    <Button type="submit" secondary className="w-[200px]">
                        Add attraction
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default AddAttraction;
