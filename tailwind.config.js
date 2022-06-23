module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "help-box": "url('./pictures/help-box.jpg')",
      }),
      colors: {
        MatLight: "#b4d4d4",
        MatBlue: "#649494",
        MatOrange: "#d46c64",
        MatRed: "#b3243c",
        MatDark: "#646464",
        MatGrey: "#666666",
        MatLightGrey: "#E9E9E9",
        MatDarkGrey: "#545252",
        MatNeutral: "#F5F5F5",
        MatTeal: "#609690",
        MatLightTeal: "#B2D7D3",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fade: "fade 1s ease-out",
      },

      fontFamily: {
        codecCold: ["Codec-Cold", "sans-serif"],
        codecColdBold: ["Codec-Cold-Bold", "sans-serif"],
        codecColdItalic: ["Codec-Cold-Italic", "sans-serif"],
        codecColdExtraBold: ["Codec-Cold-Extra-Bold", "sans-serif"],
      },
    },
    variants: {
      padding: ["first"],
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
      require('tailwind-scrollbar'),
  ],
};
