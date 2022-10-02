import SectionWelcome from "./SectionWelcome";
import Projects from "./Projects";
import Kills from "./Kills";
import Experience from "./Experience";
import { useEffect } from "react";

export default function Body({colorTitulo}){
  
useEffect(()=>{

},[])
    
    return ( 
            <>

         <SectionWelcome/>
         <Projects  colortexto={colorTitulo}/>
         
         <Kills  colortexto={colorTitulo}/>
        
         <Experience colortexto={colorTitulo}/>

            </>

    )
}