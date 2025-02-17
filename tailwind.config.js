/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F29F58", // main color
        secondary: "#1B1833", // secondary color
        tertiary: "#AB4459", //tertiary color
        accent: "#441752", // accent color
      },
      fontFamily: {
        serif: ["Ubuntu", "sans-serif"], // set Ubuntu as the default font
      },
    },
  },
  plugins: [daisyui],
};
