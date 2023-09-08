import { SectionType } from "@/app/components/section/types";
import { menuLinks } from "../navbar/data";
import StepsSections from "@/app/components/stepsSection/stepsSection";
import PopularPlaces from "@/app/components/popularPlacesSection/popularPlaces";
import Reviews from "@/app/components/reviews/reviews";
import Blog from "@/app/components/blog/blog";
import Newsletter from "@/app/components/newsletter/newsletter";

const { whyWe, hotel, reviews, blog, contact } = menuLinks ?? {};

export const SectionsContent: SectionType[] = [
    {
        id: whyWe.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <StepsSections />,
    },
    {
        id: hotel.id,
        heading: "Most Popular Tours",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <PopularPlaces />,
    },
    {
        id: reviews.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <Reviews />,
    },
    {
        id: blog.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <Blog />,
    },
    {
        id: contact.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <Newsletter />,
    },
];
