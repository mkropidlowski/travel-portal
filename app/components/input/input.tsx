import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type = "text", register, required, error, errorText, disabled }) => {
    const isError = error || !!errorText;

    return (
        <div>
            <label htmlFor={id} className="block text-xs font-medium leading-6 text-slate-600">
                {required ? <span className="text-red-600">*</span> : null}
                {label}
            </label>

            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    {...register?.(id, { required: required })}
                    disabled={disabled}
                    className={clsx(
                        disabled && "opacity-50 cursor-default",
                        "border-b border-b-slate-400 bg-transparent outline-0",
                        isError && "border-red-600"
                    )}
                />
                {isError ? <span className="text-red-600 text-xs mt-1">{errorText}</span> : null}
            </div>
        </div>
    );
};

export default Input;
