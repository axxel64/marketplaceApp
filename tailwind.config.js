/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "funko-blue": "#3A589E",
        "form-title": "#63656b",
        "btn-hover": "#f9fafb",
        "wall-gray":"#F3F3F7",
        "product-card":"#27272A",
      },
      backgroundImage: {
        "funko-logo":
          "url('https://cdn.icon-icons.com/icons2/2785/PNG/512/shopping_bag_icon_177404.png')",
      },
      backgroundSize: {
        "funko-size": "10em", // Aquí defines el tamaño personalizado de la imagen de fondo.
      },
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
    screens:{
      'tablet':'1025px',
      'phone':'450px',
    },
    keyframes: {
      bounceLeft: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(-10px)' },
      },
    },
    animation: {
      bounceLeft: 'bounceLeft 0.5s ease-in-out',
    },
  },
  plugins: [],
}

