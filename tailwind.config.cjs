/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        // tus colores personalizados
        'boda-verde': '#A3B18A',
        'boda-oliva': '#8B9B70',
        'boda-dorado': '#D6B984',
        'boda-marfil': '#F6F5F3',
        'boda-eucalipto': '#6D7D5D',
      },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}
