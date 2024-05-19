/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        mint: '#3EB489',
        raspberry: '#E30B5D',
        lightMint: '#A7E4C0',
        lighter: '#AAF0D1'
      },
      backgroundImage: {
        'gradient-mint-raspberry': 'linear-gradient(200deg, #3EB489, #E30B5D)',
      },
    },
  },
  plugins: [],
}