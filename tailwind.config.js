// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#111439', // Dark Blue
          secondary: '#F8F8F9', // White Lilac
          heading: '#7B2CBF', // Purple for headings
          accent: '#FF9E00', // Orange for accents
          gradient: {
            start: '#111439',
            end: '#1A1F4B'
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(135deg, #111439 0%, #1A1F4B 100%)',
        }
      },
    },
    plugins: [],
  }