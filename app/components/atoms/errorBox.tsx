import Link from "next/link";
import { FC } from "react";
import Button from "../button/button";
type ErrorProps = {
    text: string;
    isReturnButton?: boolean;
    returnButtonText?: string;
    returnHref?: string;
};

const ErrorBox: FC<ErrorProps> = ({ text, isReturnButton, returnButtonText, returnHref }) => {
    const customLink = `${returnHref}`;
    return (
        <div className="flex flex-col justify-around items-center max-w-[500px] w-[300px] h-[150px] bg-white rounded-md shadow-md p-3">
            <h2 className="text-md font-medium">{text}</h2>
            {isReturnButton ? (
                <Link href={customLink}>
                    <Button type="button" secondary>
                        {returnButtonText}
                    </Button>
                </Link>
            ) : null}
        </div>
    );
};

export default ErrorBox;
