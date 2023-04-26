/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      "primary-purple-300": "#2F2F9C",
      "purple-100": "#E0E0F0",
      "purple-50": "#E0E0F0",
      "secondary-marine-blue-300": "#19235F",
      "marine-blue-800": "#101037",
      "tertriary-off-white-50": "#F5F5F5",
      "cool-grey-500": "#A7AEB4",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      ivypresto: ["ivypresto-headline", "serif"],
    },
    plugins: [],
  },
};
