/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        themeBg: 'var(--color-bg)',
        themeCard: 'var(--color-card)',
        themeCardHover: 'var(--color-card-hover)',
        themeText: 'var(--color-text)',
        themeTextMuted: 'var(--color-text-muted)',
        themeTextTitle: 'var(--color-text-title)',
        themeBorder: 'var(--color-border)',
        themeInput: 'var(--color-input)',
      }
    },
  },
  plugins: [],
};
