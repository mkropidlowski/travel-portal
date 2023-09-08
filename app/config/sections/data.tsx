import { SectionType } from "@/app/components/section/types";
import { menuLinks } from "../navbar/data";
import StepsSections from "@/app/components/stepsSection/stepsSection";

const { tours, hotel, service, blog, contact } = menuLinks ?? {};

export const SectionsContent: SectionType[] = [
    {
        id: tours.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <StepsSections />,
    },
    {
        id: hotel.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <StepsSections />,
    },
    {
        id: service.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <StepsSections />,
    },
    {
        id: blog.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <StepsSections />,
    },
    {
        id: contact.id,
        heading: "Why Choose Our Trip",
        subHeading: "Client stealth iteration monetization distuprite channels. Bla bla bla",
        shouldBeRow: true,
        visulContent: <StepsSections />,
    },
];
