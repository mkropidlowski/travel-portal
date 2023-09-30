import Home from "@/app/components/icons/Home";
import Dashboard from "@/app/components/icons/Dashboard";
import Touris from "@/app/components/icons/Touris";
import User from "@/app/components/icons/User";
import Reservation from "@/app/components/icons/Reservation";

export const menuLinks = {
    home: {
        id: "",
        icon: <Home />,
        text: "Home",
    },
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
};
