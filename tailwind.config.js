/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      boxShadow: {
        'indigo': '0 4px 6px rgba(75, 85, 99, 0.3)', // Custom shadow color for indigo
        'blue': '0 4px 6px rgba(59, 130, 246, 0.3)', // Custom shadow color for blue
        'green': '0 4px 6px rgba(34, 197, 94, 0.3)', // Custom shadow color for green
        'red': '0 4px 6px rgba(220, 38, 38, 0.3)', // Custom shadow color for red
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
