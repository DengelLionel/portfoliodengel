import Presentacionvideo from "../components/Header/Presentacion_video";
import Body from "../components/Body/index";

import Contacto from "../components/Body/Contacto";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {cambioTema} from "../redux/slices/cambioTema"
import {ColorExteriorModal} from "../redux/slices/ColorExteriorModals";
export default function PortafolioHome(){
    const cambioTemas=useSelector(cambioTema);
    const colorbodynegro="w-full lg:z-[70] bg-negro";
    const colorbodyblanco="w-full  bg-white";
    const colorblanco="text-white";
    const colorsecund="text-titulos";
    const colorTitulo=`${cambioTemas?colorsecund:colorblanco}`
    const cambiotema=`${cambioTemas?colorbodyblanco:colorbodynegro}`
    const colorExteriorMostrar=useSelector(ColorExteriorModal)
    useEffect(()=>{

    },[colorExteriorMostrar])
    let fondo=`absolute top-0 h-full w-full  xl:w-full   ${colorExteriorMostrar===true?"bg-negrotransparente z-[80] h-[785.5vh] sm:h-[664.5vh] md:h-[682.5vh] lg:h-[550.5vh] xl:h-[761vh] 2xl:h-[498.5vh]  ":"bg-transparent "}`
    return(
        <> 
        <div className={fondo}></div>
        <body className={cambiotema}>
            
        <Presentacionvideo/>
        <Body colorTitulo={colorTitulo}/>
        <Contacto colortexto={colorTitulo}/>
            
        </body>
        </>
    )
}