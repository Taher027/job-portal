/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url(src/assets/bg.png)",
      },
      colors: {
        primaryColor: "#1967d2",
        secondaryColor: "#363636",

        btnHoverBg: "#0146a6",
        hoverBg: "#E5ECFA",
      },
    },
  },
  plugins: [],
};
// heading: "#202124", #696969 login-btn #e2eaf8
//  btn #
