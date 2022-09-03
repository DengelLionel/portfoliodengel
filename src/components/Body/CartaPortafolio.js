import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function CartaPortafolio({pagina,imagen}){

 
   useEffect(()=>{
     
   },[])
     
     
   return(
      <>
      <Link to={pagina} className="w-[200px] h-[200px] shadow-cartaportafolio bg-blue-900  mb-[50px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]  xl:rounded-xl 2xl:w-[350px] 2xl:h-[350px] rounded-lg overflow-hidden relative duration-1000 xl:hover:skew-x-12 ">
      
      <img  alt="img" src={imagen}  className="w-[200px] h-[200px]  lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[350px] 2xl:h-[350px] cursor-pointer xl:hover:skew-x-6 xl:duration-1000"/>
      
    
    </Link>
    
      </>
    
   )
}