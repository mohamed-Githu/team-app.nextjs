module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cabin: ["Cabin", "sans-serif"],
    },
    colors: {
      blue: {
        DEFAULT: "#0AB3E4",
        dark: "#21283B",
      },
      grey: {
        dark: "#6D7D8B",
        DEFAULT: "#BBC8D4",
        light: "#F5F7FA",
      },
      white: "#fff",
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "455px" },
    },
    extend: {
      backgroundImage: () => ({
        "hero-bg": "url('/images/hero-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
