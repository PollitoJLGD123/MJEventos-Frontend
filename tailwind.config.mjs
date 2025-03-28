/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        grisbg:'#151515', // Color para el todos los backgrounds
        dorado: '#ea9d2f', // Color dorado para los titulos
        rosadotarget: '#dcb894', // Color rosa para las tarjetas
      },
      fontFamily: {
        title: ['Telegraf', 'ui-serif'], // ui-serfi para detectar cuando Telegraf no carga
      },
    },
  },
  plugins: [],
};
