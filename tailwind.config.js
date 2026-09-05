/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bricolage)", "Arial", "Helvetica", "sans-serif"],
        heading: ["var(--font-bricolage)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-bricolage)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
} 