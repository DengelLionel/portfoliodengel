const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        cajaplomo:"linear-gradient(to left,black 50%,black 50%,transparent)",
        degradadonegro:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        
        degradadonegroazul:"linear-gradient(to left,#171C1A,#1228E8)",
        blancopalido:"#fafafa",
        degradadoazul:"linear-gradient(to left, #050533,#0e0f3c)",
        degradadoceleste2:"linear-gradient(#0b0b2d,#0b0b2d)",
        degradadorojo:"linear-gradient(90deg,transparent,#3ec4d0,transparent)",
        degradadobotonflash1:"linear-gradient(90deg,transparent,#AD8410,transparent)",
        degradadobotonflash2:"linear-gradient(90deg,transparent,#c1f6ed,transparent)",
        degradadobotonflash5:"linear-gradient(90deg,transparent,#f29f05,transparent)",
        degradadobotonflash10:"linear-gradient(90deg,transparent,#6d01d7,transparent)",
        degradadobotonflash12:"linear-gradient(90deg,transparent,#47466d,transparent)",
        degradadoperfil:"linear-gradient(#41e8d6,#3dd2d9)",

        
       
        
       
        
       
       
       
        
        degradadodesarrolloweb:"linear-gradient(to left,#00a775,#011710)",
        degradadodesarrollowebxl:"linear-gradient(#00a775,#0352a1)",
        degradadoheaderdesarrolloweb:"linear-gradient(#070245,#021445)",
        degradadobodydesarrollomovil:"linear-gradient(#3b137b,#18043e)",
        degradadobodydiseno:"linear-gradient(#7cd60f,#d3d60f)",
        degradadoverdeperfil2:"linear-gradient(to left,#3FD0C9,#449342)",
        degradadoverdeperfil3:"linear-gradient(to right,#1F2EFF,#C2C6FF)",
        degradadoverdeperfil4:"linear-gradient(to right,#0B56FF,#5C8DFF)",
        degradadoverdeperfil5:"linear-gradient(to right,#f29f05,#f28705)",
        degradadoverdeperfil8:"linear-gradient(to right,#92BEC2,#0B1311)",
        degradadoverdeperfil7:"linear-gradient(to right,#EDD21F,#F78300)",
        degradadobotonactivo:"linear-gradient(to right,#f50c0c,#561717)",
        degradadohovercategoria:"linear-gradient(to left,#AB0909,#960803)",
       
        
        
        
        degradadoverdeperfil9:"linear-gradient(to left,#E9A107,#EBBB0D)",
        degradadoverdeperfil10:"linear-gradient(to left,#2f6086,#EBBB0D)",
        degradadoverdeperfil12:"linear-gradient(to left,#47466d,#abedd8)",
        

      },
      colors:{
        "degradadoceleste":"#050533",
        "degradadoitemuno":"#F36536",
        "degradadoitemdos":"#008072",
        "degradadoitemtres":"#1627FF",
        "degradadoitemcuatro":"#0A95FF",
        "degradadoitemcinco":"#f25c05",
        "degradadoitemseis":"#3a10f3",
        "degradadoitemsiete":"#f50c0c",
        "degradadoitemocho":"#ead41c",
        "degradadoitemnueve":"#250be8",
        "degradadoitemdiez":"#0AA0C2",
        "degradadoitemonce":"#240567",
        "degradadoitemdoce":"#3d84a7",
        "degradadohovercategoria8":"#E9A107",
        "degradadohovercategoria10":"#16CAF3",
        "degradadohovercategoria11":"#4000b3",
        "degradadohovercategoria12":"#47466d",
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
        "azul":"#060969",
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
        "azul5":"#0068B8",
        "azul6":"#4754FF",
        "azuloscuro":"#000A8F",
        "celesteclaro2":"#3B99A5",
        "celeste3":"#0A95FF",
        "celeste4":"#85A9FF",
        "celesteoscuro":"#00457A",
        "amarillo4":"#FFFF00",
        "amarillo5":"#f29f05",
        "naranjaclaro":"#f25c05",
        "naranjaoscuro1":"#d33a03",
        "naranjaoscuro2":"#a82f01",
        "amarillo6":"#FFFF00",
        "amarillo7":"#ead41c",
        "rojo4":"#ee1416",
        "rojoclaro":"#EE9280",
        "azul8":"#250be8",
        "celeste10":"#06b1e5",
        "morado1":"#4000b3",
        "morado2":"#6d01d7",
        "celeste12":"#46cdcf",
        "celeste13":"#3d84a7",
        "categoria9":"#3325CB",
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
      transitionDuration:{
        'cambio':'--webkit-transition,background-color'
      },
      
    },
  },
  plugins: [],
}
