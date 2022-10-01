import SeccionBienvenido from "./SeccionBienvenido";
import Portafolio from "./Portafolio";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";
import {useEffect } from "react";
import ReactGA from "react-ga";

export default function Body({colorTitulo}){

    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
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