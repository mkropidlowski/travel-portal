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
        subHeading:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
        shouldBeRow: true,
        visulContent: <PopularPlaces />,
    },
    {
        id: reviews.id,
        heading: "Tourist reviews",
        subHeading:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        shouldBeRow: true,
        visulContent: <Reviews />,
    },
    {
        id: blog.id,
        heading: "Our Blog",
        subHeading:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        shouldBeRow: true,
        visulContent: <Blog />,
    },
    {
        id: contact.id,
        heading: "Subscribe to our newsletter",
        subHeading: "I must explain to you how all the misaken idea of denouncing pleasure.",
        shouldBeRow: true,
        visulContent: <Newsletter />,
    },
];
