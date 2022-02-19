module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: "#9c44dc",
      purple1:"#4425EC",
      purple2:"#6C63FF",
      black: "#222",
      white: "#fff",
      gray0: "#636363",
      gray1: "#888888",
      gray2: "#c1c7c9",
      gray3: "#f0f0f0",
      red: "#bf0010",
       
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
