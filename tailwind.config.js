/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // scans all files in the app folder
    './components/**/*.{js,ts,jsx,tsx,mdx}', // scan components folder
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // scan pages folder (if it exists)
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#00CED1',
          500: '#008080',
          600: '#006666',
        },
        orange: {
          400: '#FFA500',
        },
      },
    },
  },
  plugins: [],
};
