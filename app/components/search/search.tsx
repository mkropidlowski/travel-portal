"use client";
import { useState } from "react";
import Select from "react-select";
import Button from "../button/button";
const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];
const Search = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="w-full h-[200px] flex justify-center items-center relative top-[-100px]">
            <div className="w-[900px] h-[200px] bg-white rounded-lg shadow-lg flex justify-center items-center">
                <form className="flex md:flex-row flex-col gap-3 justify-center">
                    <div className="flex md:flex-row flex-col gap-3">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            isClearable
                            placeholder="Country"
                            options={options}
                            className="w-[250px]"
                        />
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            isClearable
                            placeholder="Attraction"
                            options={options}
                            className="w-[250px]"
                        />
                    </div>
                    <Button type="submit" secondary>
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Search;
