/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "back-color":
          "linear-gradient(140deg, rgba(244,71,210,0.8) 0%, rgba(76,59,207,1) 16%)",
        "disk-color":
          "linear-gradient(0deg, rgba(175,71,210,1) 10%, rgba(9, 66, 158, 1) 80%)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
};
