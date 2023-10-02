import clsx from "clsx";
import { FC, HTMLProps } from "react";

export interface Props {
    type?: "submit" | "button";
    primary?: boolean;
    secondary?: boolean;
    teritary?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
    color = "primary",
    type = "button",
    className,
    primary,
    secondary,
    teritary,
    children,
    ...rest
}) => (
    <button
        type={type}
        color={color}
        className={clsx(
            `
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        font-normal
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2
        tracking-[1px]`,
            primary &&
                "inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-sm leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]",
            secondary &&
                "text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded text-sm px-6 pb-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
            className
        )}
        {...rest}
    >
        {children}
    </button>
);

export default Button;
