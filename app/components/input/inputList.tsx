/* eslint-disable no-unused-vars */

import { useState } from "react";
import Button from "../button/button";
import clsx from "clsx";

interface Props {
    addItems: (item: string) => void;
    deleteItems: (item: string) => void;
    items: string[];
    isError?: boolean;
    errorText?: string;
    required?: boolean;
    label?: string;
    id?: string;
}

const InputList: React.FC<Props> = ({ addItems, deleteItems, required, items, isError, errorText, label, id }) => {
    const [userValue, setUserValue] = useState<string>("");

    const handleInputChange = (event: { target: { value: string } }) => {
        const checkValue = event.target.value ?? "";
        setUserValue(checkValue);
    };

    const handlerAddItem = () => {
        if (userValue.trim() !== "") {
            addItems(userValue);
            setUserValue("");
        }
    };

    const handleItemDelete = (item: string) => {
        deleteItems(item);
    };

    return (
        <div className="flex flex-col">
            <div className="w-[300px]">
                <label htmlFor={id} className="block text-xs font-medium leading-6 text-slate-600">
                    {required ? <span className="text-red-600">*</span> : null}
                    {isError ? <span className="text-red-600 text-xs mt-1">{errorText}</span> : <span>{label}</span>}
                </label>
                <div className="flex gap-3">
                    <input
                        type="text"
                        className={clsx(
                            "border-b border-b-slate-400 bg-transparent outline-0",
                            isError && "border-red-600"
                        )}
                        value={userValue}
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        className="flex justify-center items-center text-[30px] text-white bg-slate-500 rounded-full w-[25px] h-[25px]"
                        onClick={handlerAddItem}
                    >
                        +
                    </button>
                    {isError ? <div className={"text-red-600"}>{errorText}</div> : null}
                </div>
            </div>

            <ul className={"flex flex-col gap-2 mt-5"}>
                {items.map((item) => (
                    <li
                        key={item}
                        className={"w-[250px] overflow-x-auto p-2 bg-slate-200 rounded-md shadow"}
                        onClick={() => handleItemDelete(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InputList;
