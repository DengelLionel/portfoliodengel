import SeccionBienvenido from "./SeccionBienvenido";
import Portafolio from "./Portafolio";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";



export default function Body({colorTitulo}){

    
    return ( 
            <>

         <SeccionBienvenido/>
         <Portafolio  colortexto={colorTitulo}/>
         
         <Habilidades  colortexto={colorTitulo}/>
        
         <Experiencia colortexto={colorTitulo}/>

            </>

    )
}