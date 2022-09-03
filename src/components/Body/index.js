import SeccionBienvenido from "./SeccionBienvenido";
import Portafolio from "./Portafolio";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";

import {useEffect } from "react";

export default function Body({colorTitulo}){
    useEffect(()=>{
  
    },[])
    return ( 
            <>

         <SeccionBienvenido/>
         <Portafolio  colortexto={colorTitulo}/>
         
         <Habilidades  colortexto={colorTitulo}/>
        
         <Experiencia colortexto={colorTitulo}/>

            </>

    )
}