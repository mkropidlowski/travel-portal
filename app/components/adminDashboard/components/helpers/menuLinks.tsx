import { Add, Homepage, Reservation, User, Touris, Dashboard } from "@/app/components/icons";

export const dashboardLinks = {
    dashboard: {
        id: "dashboard",
        icon: <Dashboard />,
        text: "Dashboard",
    },
    tours: {
        id: "dashboard/tours",
        icon: <Touris />,
        text: "Tours",
    },
    users: {
        id: "dashboard/users",
        icon: <User />,
        text: "Users",
    },
    reservations: {
        id: "dashboard/reservation",
        icon: <Reservation />,
        text: "Reservation",
    },
    addAttraction: {
        id: "dashboard/add-attraction",
        icon: <Add />,
        text: "Add attraction",
    },
    homepage: {
        id: "/",
        icon: <Homepage />,
        text: "Main page",
    },
};
