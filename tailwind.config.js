module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        square: "square",
      },
      colors: {
        primary: "#193549",
        secondary: "#1aebff",
        darken: "#212529",
        darkDarken: "#202023",
        darker: "#202023",
        dark: "#111111;",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        lobsterTwo: "'Lobster Two', cursive",
      },
      backgroundImage: {
        "hero-image": "url('/images/hero.jpg')",
        "resume-image": "url('/images/resume.jpg')",
      },
    },
  },
  plugins: [
    require("tailwindcss-selection-variant"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
