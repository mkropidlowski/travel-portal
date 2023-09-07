import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                black: "#171717",
                gray: "#DDE6ED",
                blueSky: "#0ea5e9",
            },
            screens: {
                xxs: "416px",
                xs: "536px",
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                xxl: "1440px",
            },
        },
    },
    plugins: [],
};
export default config;
