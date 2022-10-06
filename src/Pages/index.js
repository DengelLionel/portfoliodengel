import ImagePresentation from "../components/Header/ImagePresentation";
import Body from "../components/Body/index";

import Contact from "../components/Body/Contact";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {cambioTema} from "../redux/slices/cambioTema";
import {setOpenMenuLenguage,stateOpenMenuLenguage} from "../redux/slices/cambioAspectoPagina";
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
    const openMenuLenguage=useSelector(stateOpenMenuLenguage)
    const dispatch=useDispatch();
   
        
    
    useEffect(()=>{

    },[])

    return(
        <> 
       
       
        <body onClick={()=>dispatch(setOpenMenuLenguage(!openMenuLenguage))} className={cambiotema}>
            
        <ImagePresentation/>
        <Body colorTitulo={colorTitulo}/>
        <Contact colortexto={colorTitulo}/>
            
        </body>
        </>
    )
}