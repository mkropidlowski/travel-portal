import Heading from "@/app/components/adminDashboard/components/heading";
import { Trip } from "@/app/components/icons";

const Tours = () => {
    return (
        <div className="w-[80%]">
            <Heading
                title="Here you can find all of our trips."
                descritpion="You can find all important information about specific trip."
                icon={<Trip width={200} height={100} />}
            />
        </div>
    );
};

export default Tours;
