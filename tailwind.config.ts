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
                dashboardBg: "#f0f5fb",
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
            keyframes: {
                zoomingScale: {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "5%": {
                        transform: "scale(1)",
                    },
                    "95%": {
                        transform: "scale(1.2)",
                    },
                    "100%": {
                        transform: "scale(1.2)",
                    },
                },
            },
            animation: {
                zooming: "zoomingScale 15s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
};
export default config;
