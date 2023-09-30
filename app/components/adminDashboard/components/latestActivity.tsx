import { Clock } from "../../icons";
import Heading from "./heading";

const LatestActivity = () => {
    return (
        <div className="bg-white rounded-2xl w-full">
            <Heading title="Latest Activity" descritpion="Here you can find latest reservation." />
            <div className="flex flex-col px-6 gap-3">
                <div className="flex gap-5 items-center">
                    <Clock width={25} height={25} className="bg-gray p-1 rounded-md" />
                    <h2 className="font-medium ">12 Jan 2023</h2>
                </div>
                <div className="text-sm border-l-2 border-gray relative left-[12px]">
                    <p className="px-8 mb-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dicta alias fugiat odio velit
                        sed ad nulla placeat molestiae, accusantium quia.
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <Clock width={25} height={25} className="bg-gray p-1 rounded-md" />
                    <h2 className="font-medium ">15 Jan 2023</h2>
                </div>
                <div className="text-sm border-l-2 border-gray relative left-[12px]">
                    <p className="px-8 mb-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dicta alias fugiat odio velit
                        sed ad nulla placeat molestiae, accusantium quia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LatestActivity;
