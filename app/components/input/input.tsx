"use client";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type = "text", register, required, errors, disabled }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-medium leading-6 text-slate-600">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-default",
                        "border-b border-b-slate-400 bg-transparent outline-0"
                    )}
                />
            </div>
        </div>
    );
};

export default Input;
