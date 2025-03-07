/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["var(--poppins)"],
          jost: ["var(--jost)"],
          allura: ["var(--allura)"],
        },
        colors: {
          primary: "var(--primary)",
          gray: {
            100: "var(--gray-100)",
            200: "var(--gray-200)",
          },
          customPink: "#fca5f1",
          purple: "var(--purple)",
        },
        screens: {
          'xs': '320px',
        },
      },
    },
    plugins: [],
  };
  