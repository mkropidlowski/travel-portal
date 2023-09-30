import Dashboard from "@/app/components/icons/Dashboard";
import Touris from "@/app/components/icons/Touris";
import User from "@/app/components/icons/User";
import Reservation from "@/app/components/icons/Reservation";
import Homepage from "@/app/components/icons/Homepage";

export const dashboardLinks = {
    dashboard: {
        id: "dashboard",
        icon: <Dashboard />,
        text: "Dashboard",
    },
    tours: {
        id: "tours",
        icon: <Touris />,
        text: "Tours",
    },
    users: {
        id: "users",
        icon: <User />,
        text: "Users",
    },
    reservations: {
        id: "reservation",
        icon: <Reservation />,
        text: "Reservation",
    },
    homepage: {
        id: "/",
        icon: <Homepage />,
        text: "Main page",
    },
};
