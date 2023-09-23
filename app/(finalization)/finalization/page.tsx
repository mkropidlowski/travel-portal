import Button from "@/app/components/button/button";
import Link from "next/link";

const FinalizationPage = () => (
    <div className="md:min-w-[900px] w-[320px] flex flex-col items-center justify-center relative top-[150px] gap-[50px]">
        <h2 className="text-[30px] max-w-[500px] font-medium text-center">
            Thank you for booking. You will find all the necessary information in your email.
        </h2>
        <Link href={"/"}>
            <Button type="button" primary>
                Back to main page
            </Button>
        </Link>
    </div>
);

export default FinalizationPage;
