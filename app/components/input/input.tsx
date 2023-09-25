import clsx from "clsx";
import { ChangeEvent, HTMLProps, forwardRef } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
    label?: string;
    id?: string;
    type?: string;
    required?: boolean;
    // register?: UseFormRegister<FieldValues>;
    error?: boolean;
    errorText?: any;
    disabled?: boolean;
    fullWidth?: boolean;
    isError?: string | boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps & HTMLProps<HTMLInputElement>>(
    (
        {
            label,
            id,
            type,
            required,
            fullWidth,
            error,
            errorText,
            isError = error || !!errorText,
            disabled,
            onChange = () => null,
            ...rest
        },
        ref
    ) => {
        const inputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);
        return (
            <div>
                <label htmlFor={id} className="block text-xs font-medium leading-6 text-slate-600">
                    {required ? <span className="text-red-600">*</span> : null}
                    {isError ? <span className="text-red-600 text-xs mt-1">{errorText}</span> : <span>{label}</span>}
                </label>

                <div className="mt-2">
                    <input
                        id={id}
                        type={type}
                        // {...register?.(id, { required: required })}
                        // disabled={disabled}
                        onChange={inputHandler}
                        className={clsx(
                            disabled && "opacity-50 cursor-default",
                            "border-b border-b-slate-400 bg-transparent outline-0",
                            isError && "border-red-600",
                            fullWidth && "w-full"
                        )}
                        ref={ref}
                        {...rest}
                    />
                </div>
            </div>
        );
    }
);

Input.displayName = " Input";
export default Input;
