"use client";
import { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import { useRouter } from "next/navigation";
import getCapitalizeFirstLetter from "./helpers/ getCapitalizeFirstLetter";

const Search = () => {
    const router = useRouter();
    const [countryInput, setCountryInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (countryInput === "") {
            setError("Please input location name like: Turkey");
        } else {
            router.push(`/search/${getCapitalizeFirstLetter(countryInput)}`);
            setError("");
        }
    };

    return (
        <div className="w-full h-[200px] flex justify-center items-center relative top-[-100px]">
            <div className="w-[500px] h-[200px] bg-white rounded-lg shadow-lg flex justify-center items-center">
                <form className="flex flex-col gap-3 justify-center items-center" onSubmit={handleSubmit}>
                    <h2 className="text-[25px] font-semibold">Where do you want to travel?</h2>
                    <div className="flex md:flex-row flex-col gap-3 items-center ">
                        <Input
                            type="text"
                            placeholder={"Type country"}
                            value={countryInput}
                            onChange={(e) => setCountryInput((e.target as HTMLInputElement).value)}
                        />
                    </div>
                    {error && <span className="text-sm text-red-500">{error}</span>}
                    <Button type="submit" secondary>
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Search;
