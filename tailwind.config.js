/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url(src/assets/bg.png)",
      },
      colors: {
        primary: "#363636",
        btnPrimaryColor: "#1967d2",

        hover: "#0146a6",
      },
    },
  },
  plugins: [],
};
// heading: "#202124", #696969 login-btn #e2eaf8
//  btn #
