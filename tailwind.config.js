/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#40414f",
          "200": "#343541",
        },
        gray: {
          "100": "#202123",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(32, 33, 35, 0.5)",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        gainsboro: "#d9d9e3",
        silver: "#c5c5d2",
        white: "#fff",
        teal: "#018374",
        lightslategray: "#8e8ea0",
        dimgray: {
          "100": "#565869",
          "200": "#4e4f60",
        },
        palegoldenrod: "#fae69e",
        darkgoldenrod: "#927201",
        whitesmoke: "#ececf1",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "9980xl": "9999px",
        "11xl": "30px",
        "13xl": "32px",
        "mid-6": "17.6px",
      },
    },
    fontSize: {
      base: "16px",
      "xs-8": "11.8px",
      "sm-8": "13.8px",
      sm: "14px",
      "sm-9": "13.9px",
      "17xl": "36px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
