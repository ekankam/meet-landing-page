/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "var(--brand-blue)",
        "brand-royal-purple": "var(--brand-royal-purple)",
        "brand-space-cadet": "var(--brand-space-cadet)",
        "brand-cool-gray": "var(--brand-cool-gray)",
        "brand-photo-blue": "var(--brand-photo-blue)",
        "brand-mauve": "var(--brand-mauve)",
        "brand-platinum": "var(--brand-platinum)",
        "brand-seasalt": "var(--brand-seasalt)",
      },
    },
  },
  plugins: [],
};
