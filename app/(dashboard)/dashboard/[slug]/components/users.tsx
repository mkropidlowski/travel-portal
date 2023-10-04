import Heading from "@/app/components/adminDashboard/components/heading";
import Paragraph from "@/app/components/atoms/paragraph";
import { UserHeading } from "@/app/components/icons";
import { getUsers } from "@/app/helpers/getUsers";
import { BE_User } from "@/types/types";
import { use } from "react";

const Users = () => {
    const users = use(getUsers());
    return (
        <div className="flex flex-col gap-4">
            <Heading
                title="Here you can find users list."
                descritpion="All informations, like e-mail, and role."
                icon={<UserHeading width={200} height={100} />}
            />
            <div className="flex flex-col gap-2 bg-white p-2 rounded-2xl shadow-md">
                {users.map((user: BE_User) => (
                    <div key={user.id} className="flex flex-wrap gap-3 bg-slate-200 rounded-lg p-2 shadow">
                        <Paragraph text="Name" secondText={user.name} />
                        <Paragraph text="E-mail" secondText={user.email} />
                        <Paragraph text="Role" secondText={user.role} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
