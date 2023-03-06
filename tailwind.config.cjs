/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "850px",
      lg: "1100px",
    },
    extend: {
      colors: {
        accentColor: "#006D77",
        hoverColor: "#004c53",
        forgroundColor: "#192438",
        mutedColor: "#8D99AF",
        lightBG: "#EDF6F9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        logoFont: ["MuseoModerno", "cursive"],
      },
      borderRadius: {
        base: "10px",
      },
      backgroundImage: {
        heroBG: 'url("./src/assets/images/image-bg-memphis-ptt.png")',
      },
      maxWidth: {
        fourk: "1440px",
      },
    },
  },
  plugins: [],
};
