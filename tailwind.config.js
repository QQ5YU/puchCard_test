/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        loginInputColor: "#F1F8FA",
        buttonHoverColor: "#0AACDD90",
        buttonOrangeColor: "#DD614A",
        buttonBlueColor: "#0AACDD",
        mainBlue: "#043593",
        darkBlue: "#1B2751",
      },
      boxShadow: {
        input:
          " 0 10px 15px -3px rgb(4 53 147 / 0.2), 0 4px 6px -4px rgb(4 53 147 / 0.2)",
        record: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
