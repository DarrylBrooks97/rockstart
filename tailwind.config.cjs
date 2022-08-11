/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glowKeyFrame 40s linear infinite',
      },
      keyframes: {
        glowKeyFrame: {
          '0%': {
            backgroundPosition: '0 0',
          },
          '50%': {
            backgroundPosition: '400% 0',
          },
          '100%': {
            backgroundPosition: '0 0',
          },
        },
      },
    },
  },
  plugins: [],
};
