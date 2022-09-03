const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        cajaplomo:"linear-gradient(to left,black 50%,black 50%,transparent)",
        degradadonegro:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        degradadoceleste:"linear-gradient(to right,#5658C9,#2787DE,#02ADEE)",
        degradadonegroazul:"linear-gradient(to left,#171C1A,#1228E8)",
        blancopalido:"#fafafa",
        degradadoazul:"linear-gradient(to right,#1D24C8,#241A62)",
        degradadoceleste2:"linear-gradient(to right,#02ADEE,#1972F8)",
        degradadorojo:"linear-gradient(90deg,transparent,rgb(242, 18, 55),transparent)",
        degradadoperfil:"linear-gradient(#132D8E,#F6A71E)",
        degradadoitemuno:"linear-gradient(to left,#dc8b08,#281901)",
        degradadoitemdos:"linear-gradient(to left,#009552,#0f4142)",
        degradadoitemtres:"linear-gradient(to right,#2787DE,#098264,#d74d46,#d4e91a)",
        degradadoitemcuatro:"linear-gradient(to left,#2787DE,#095082)",
        degradadoitemcinco:"linear-gradient(to left,#f69545,#f97000)",
        degradadoitemseis:"linear-gradient(to left,#f31410,#3a10f3)",
        degradadoitemsiete:"linear-gradient(to left,#f50c0c,#561717)",
        degradadoitemocho:"linear-gradient(to left,#e3b40a,#a07f09)",
        degradadoitemnueve:"linear-gradient(to left,#250be8,#f66207)",
        degradadoitemdiez:"linear-gradient(to left,#06b1e5,#023949)",
        degradadoitemonce:"linear-gradient(to left,#240567,#64049c)",
        degradadoitemdoce:"linear-gradient(to left,#0c8894,#051011)",
        degradadodesarrolloweb:"linear-gradient(to left,#00a775,#011710)",
        degradadodesarrollowebxl:"linear-gradient(#00a775,#0352a1)",
        degradadoheaderdesarrolloweb:"linear-gradient(#070245,#021445)",
        degradadobodydesarrollomovil:"linear-gradient(#3b137b,#18043e)",
        degradadobodydiseno:"linear-gradient(#7cd60f,#d3d60f)",
      },
      colors:{
        "blancotexto":"#fafafa",
        "negrotransparente":"rgba(0,0,0,.8)",
        "negro":"rgb(60,60,60)",
        "navcoloramarillo":"#edc70c",
        "sobremi":"#02e9de",
        "titulos":"#02e9de",
        "blancotransparente":"rgba(255,255,255,.5)",
        "bordemorado":"#3d0693",
        "triangulos":"#5658C9",
        "azul":"#17034c",
     
      },
      fontFamily:{
        ronsard:['Cairo', "sans-serif"],
        robotor:['Roboto',"sans-serif"],
        robotob:['Roboto',"sans-serif"],
        robotom:['Roboto',"sans-serif"],
      },
      boxShadow:{
        cartaportafolio:"#C4C4C4 20px 30px",
      },
      
    },
  },
  plugins: [],
}
