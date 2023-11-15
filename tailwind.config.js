/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                mrv: {
                    "sky-100": "#1dbbff",
                    "sky-200": "#01a6c4",
                    red: "#e63f3f",
                    green: "#7ed957",
                },
            },
            fontFamily: {
                poppins: ["Poppins"],
                yanone: ["Yanone Kaffeesatz"],
            },
        },
    },
    plugins: [],
};
