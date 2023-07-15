/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3.5s linear infinite",
        "bounce-mid": "bounce 2.5s linear infinite",
        "bounce-fast": "bounce 1.5s linear infinite",
        "ping-slow": "ping 1.5s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#062e57 5px,#f5f5f5 100px);",
      },
    },
  },
  plugins: [],
};
