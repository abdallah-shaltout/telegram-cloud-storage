/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    // safelist: [
    //     "fill-rose-500",
    //     "fill-blue-500",
    //     {
    //         pattern: /fill-(rose|blue|red|slate|indigo|blue-gray)-[1-9]00/,
    //     },
    // ],
    theme: {
        extend: {
            screens: {
                xl: { max: "1399px" },

                lg: { max: "1199px" },

                md: { max: "991px" },

                sm: { max: "767px" },

                xs: { max: "576px" },
            },
            boxShadow: {
                me: "0 2px 8px rgba(0,0,0,.1)",
            },
            fontFamily: {
                default: ["Nunito Sans", "sans-serif"],
            },
            fontWeight: {
                bold: "600",
                black: "800",
            },
            colors: {
                "very-dark": "#1e2a3c",
                dark: "#27374D",
                "dark-50": "#526D82",
                "dark-20": "#9DB2BF",
                light: "#DDE6ED",
            },
            width: {
                nine: "90%",
            },
        },
    },
    plugins: [],
};
