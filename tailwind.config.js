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
        buttonBlueColor: "#0AACDD",
        buttonOrangeColor: "#DD614A",
        mainBlue: "#043593",
        darkBlue: "#1B2751",
      },
    },
  },
  plugins: [],
};
