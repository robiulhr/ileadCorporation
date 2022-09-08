/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-responsive-carousel/lib/js/**/*.js",
    "./node_modules/slick-carousel/slick/*.{js,jsx,ts,tsx,css,scss,less}",
    "./node_modules/rc-pagination/**/*.{js,jsx,ts,tsx,css,scss,less}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "down-arrow": "url('/src/assets/img/random/Vector.png')",
      },
      colors: {
        info: "rgba(188, 211, 250, 1)",
        danger: "rgba(255, 202, 213, 1)",
        success: "rgba(211, 255, 176, 1)",
        "balon-1": "rgba(86, 86, 86, 0.3)",
        "balon-2": "rgba(0, 50, 139, 0.2)",
        "balon-3": "rgba(33, 107, 238, 0.25)",
        "lightest-blue": "#3b82f61c",
        "lighter-blue": "#3b82f64f",
        "normal-light-blue": {
          100: "#95BBFF",
          300: "rgba(149, 187, 255, 0.3)",
        },
        "primary-blue": "#216BEE",
        "normal-dark-blue": "#00328B",
        "primary-gray": {
          100: "rgba(86, 86, 86, 1)",
          600: "rgba(86, 86, 86, 0.6)          ",
        },
        "primary-white": {
          100: "rgba(255, 255, 255, 1)",
          700: "rgba(255, 255, 255, 0.7)",
        },
        "light-white": {
          500: "rgba(255, 255, 255, 0.5)",
          600: "rgba(255, 255, 255, 0.5)",
          800: "rgba(255, 255, 255, 0.8)",
        },
        "primary-red": "rgba(202, 78, 78, 1)",
        "primary-green": "rgba(0, 168, 138, 1)",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "7rem",
        "3xl": "8rem",
      },
    },
    screens: {
      xs: { min: "0px", max: "639px" },

      sm: { min: "640px", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },

      xl: { min: "1280px", max: "1535px" },

      "2xl": { min: "1536px", max: "1900px" },

      "3xl": { min: "1901px" },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xs": {
            maxWidth: "100%",
          },
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
  ],
};
