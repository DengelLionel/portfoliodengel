const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        cajaplomo:"linear-gradient(to left,black 50%,black 50%,transparent)",
        degradadonegro:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        degradadoceleste:"linear-gradient(to right, #050533,#0e0f3c)",
        degradadonegroazul:"linear-gradient(to left,#171C1A,#1228E8)",
        blancopalido:"#fafafa",
        degradadoazul:"linear-gradient(to left, #050533,#0e0f3c)",
        degradadoceleste2:"linear-gradient(#0b0b2d,#0b0b2d)",
        degradadorojo:"linear-gradient(90deg,transparent,#3ec4d0,transparent)",
        degradadobotonflash1:"linear-gradient(90deg,transparent,#AD8410,transparent)",
        degradadobotonflash2:"linear-gradient(90deg,transparent,#c1f6ed,transparent)",
        degradadobotonflash5:"linear-gradient(90deg,transparent,#f29f05,transparent)",
        degradadoperfil:"linear-gradient(#41e8d6,#3dd2d9)",
        degradadoitemuno:"linear-gradient(to left,#AD8214,#AD8410)",
        degradadoitemdos:"linear-gradient(to left,#03545e,#008072)",
        degradadoitemtres:"linear-gradient(to left,#0B56FF,#1627FF)",
        degradadoitemcuatro:"linear-gradient(to left,#2787DE,#095082)",
        degradadoitemcinco:"linear-gradient(to right,#f25c05,#f97000)",
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
        degradadoverdeperfil2:"linear-gradient(to left,#3FD0C9,#449342)",
        degradadoverdeperfil3:"linear-gradient(to right,#1F2EFF,#C2C6FF)",
        degradadoverdeperfil4:"linear-gradient(to right,#0B56FF,#5C8DFF)",
        degradadoverdeperfil5:"linear-gradient(to right,#f29f05,#f28705)",
      },
      colors:{
        "blancotexto":"#fafafa",
        "celesteclaro":"#3dd2d9",
        "negrotransparente":"rgba(0,0,0,.8)",
        "negro":"#18181b",
        "navcoloramarillo":"#edc70c",
        "sobremi":"#02e9de",
        "titulos":"#02e9de",
        "blancotransparente":"rgba(0,0,0,.5)",
        "bordemorado":"#3d0693",
        "triangulos":"#0e0f3c",
        "trianguloamarillo":"#AD8214",
        "azul":"#0020B2",
        "titulosmodonocturno":"#f7b034",
        "azul3":"#26256b",
        "plomo1":"#07070A",
        "plomo2":"#3B3F46",
        "azul4":"#001DDB",
        "amarilloclaro":"#FFEB52",
        "amarillo2":"#DFA010",
        "amarillo3":"#E58826",
        "verde1":"#3FD0C9",
        "verdeoscuro":"#02353c",
        "verdeclaro":"#c1f6ed",
        "verdeclaro2":"#2eaf7d",
        "verdeclaro3":"#449342",
        "verdeclaro4":"#008072",
        "azulclaro1":"#C2C6FF",
        "azul5":"#1627FF",
        "azul6":"#4754FF",
        "azuloscuro":"#000A8F",
        "celesteclaro2":"#3B99A5",
        "celeste3":"#0A54FF",
        "celeste4":"#85A9FF",
        "celesteoscuro":"#002B8F",
        "amarillo4":"#FFFF00",
        "amarillo5":"#f29f05",
        "naranjaclaro":"#f28705",
        "naranjaoscuro1":"#d33a03",
        "naranjaoscuro2":"#a82f01"
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
