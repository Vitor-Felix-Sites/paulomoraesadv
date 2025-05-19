/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  
    "./pages/**/*.{js,ts,jsx,tsx}",  
    "./components/**/*.{js,ts,jsx,tsx}",
     "./styles/**/*.css",  
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E2027",
        foreground: "#171717",
        textColor: "#FFFFFF",
        textSecondaryColor: "#F3F4F4",
        highlightColor: "#DFAE4F",
        textDark: "#1E2027",
        sectionBg: "#F0EEE9",
      },
    },
  },
  plugins: [],
}
