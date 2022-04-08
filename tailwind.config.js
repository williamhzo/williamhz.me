module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lusitana", "serif"],
    },
    extend: {
      colors: {
        background: "#151718",
        "high-contrast": "#ECEDEE",
        "low-contrast": "#99A29E",
        "lowest-contrast": "#4C5155",
        subtle: "#313538",
      },
    },
  },
  plugins: [],
};
