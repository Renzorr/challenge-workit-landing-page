/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1150px",
        },
        padding: "20px",
      },
      screens: {
        desktop: { max: "1023px" },
        tablet: { max: "990px" },
        mobile: { max: "550px" },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      fontSize: {
        "2xl": ["clamp(48px,7cqw,79px)"],
        xl: ["clamp(35px,7cqw,55px)"],
        lg: ["clamp(23px,3cqw,29px)"],
        base: ["clamp(15px,3cqw,18px)"],
      },
      colors: {
        "dark-purple": "#24053E",
        "light-purple": "#FCF8FF",
        "dark-gray": "#584d62",
        cyan: "#44FBA2",
      },
    },
  },
  plugins: [],
};
