/** @type {import(''tailwindcss'').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        skin: '0 8px 24px 0 var(--shadow-color)'
      }
    },
  },
  plugins: [],
}
