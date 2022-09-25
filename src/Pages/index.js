import Presentacionvideo from "../components/Header/Presentacion_video";
import Body from "../components/Body/index";

import Contacto from "../components/Body/Contacto";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {cambioTema} from "../redux/slices/cambioTema"
import {stateColorTituloNoche,stateColorTituloDia} from "../redux/slices/cambioAspectoPagina"
export default function PortafolioHome(){
    const cambioTemas=useSelector(cambioTema);
    const getColorTituloNoche=useSelector(stateColorTituloNoche)
    const getColorTituloDia=useSelector(stateColorTituloDia)
    const colorbodynegro="w-full lg:z-[70] bg-negro cursor-default";
    const colorbodyblanco="w-full  bg-white cursor-default";
    const colorblanco=getColorTituloNoche;
    const colorsecund=getColorTituloDia;
    const colorTitulo=`${cambioTemas?colorsecund:colorblanco}`
    const cambiotema=`${cambioTemas?colorbodyblanco:colorbodynegro}`
   
    useEffect(()=>{

    },[])

    return(
        <> 
       
       
        <body className={cambiotema}>
            
        <Presentacionvideo/>
        <Body colorTitulo={colorTitulo}/>
        <Contacto colortexto={colorTitulo}/>
            
        </body>
        </>
    )
}