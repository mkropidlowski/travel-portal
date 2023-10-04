import Heading from "@/app/components/adminDashboard/components/heading";
import { SettingsHeading } from "@/app/components/icons";

const Settings = () => {
    return (
        <div className="flex flex-col gap-2">
            <Heading
                title="You can find setting on your account."
                descritpion="Change same setting if you want, many of them is set by default."
                icon={<SettingsHeading width={200} height={100} />}
            />
            <div className="bg-white shadow-lg rounded-2xl">
                <h2>this is setting page</h2>
            </div>
        </div>
    );
};

export default Settings;
