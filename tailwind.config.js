/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0c14", // Deep indigo-black (Vesper style)
        surface: "#0f0f18", // Slightly elevated dark surface
        primary: "#FFFFFF", // Pure white
        secondary: "#A1A1AA", // Zinc 400 (mid gray)
        accent: {
          cyan: "#00E5FF", // Sole accent color
        },
        border: {
          muted: "#27272A", // Zinc 800
          solid: "#3F3F46", // Zinc 700
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], // Headings
        serif: ['Lora', 'Georgia', 'serif'], // Body
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
