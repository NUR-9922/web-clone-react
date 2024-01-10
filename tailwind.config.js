/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000000',
        'blue-600': '#0d6efd',
        'red-600': '#ec272f',
        'gray-100': '#f5f5f5',
        'yellow-500': '#ffc107',
        'white': '#ffffff',
        'indigo-600': '#21225f',
        'gray-900': '#212529',
        'blue-400': '#08a9e6',
        'gray-700': '#555555',
        'darkGray' : '#252525'
      },
      textColor: {
        'black': '#000000',
        'blue-400': '#08a9e6',
        'white': '#ffffff',
        'indigo-600': '#21225f',
        'gray-700': '#555555',
      },
      
    },
  },
  plugins: [],
}

