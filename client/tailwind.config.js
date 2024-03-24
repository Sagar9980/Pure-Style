/** @type {import('tailwindcss').Config} */
import { colors, gradients } from "./src/Themes/variables";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      eerieBlack: colors.eerieBlack,
      jet: colors.jet,
      platinum: colors.platinum,
      timberwolf: colors.timberwolf,
      davysGray: colors.davysGray,
      white: colors.white,
    },
    backgroundImage: {
      "gradient-top": gradients.top,
      "gradient-right": gradients.right,
      "gradient-bottom": gradients.bottom,
      "gradient-left": gradients.left,
      "gradient-top-right": gradients.topRight,
      "gradient-bottom-right": gradients.bottomRight,
      "gradient-top-left": gradients.topLeft,
      "gradient-bottom-left": gradients.bottomLeft,
      "gradient-radial": gradients.radial,
    },
    extend: {},
  },
  plugins: [],
};
