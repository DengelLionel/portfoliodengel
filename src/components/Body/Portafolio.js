import { useEffect,useState } from "react";
import Triangulo from "./secciones/Triangulo";
import ComponentesBackAndFrond from "../../Pages/DesarrolloWeb/ComponentesBackAndFrond";
import DesarrolloMovil from "../../Pages/DesarrolloMovil";
import DisenoGrafico from "../../Pages/DiseñoGrafico"
export default function Portafolio({colortexto}){

    const [webDevelopment,setWebDevelopment]=useState(true)
    const [movilDevelopment,setMovilDevelopment]=useState(false)
    const [design,setDesign]=useState(false)
          
    let claseTitulo=`relative top-[80px] z-[50] font-bold font-robotob text-center text-xl xl:text-2xl mb-[30px] xl:relative xl:top-[80px] 2xl:text-3xl 2xl:relative 2xl:top-[80px] ${colortexto}`;
    
    const HandledWebDevelopment=()=>{
        setWebDevelopment(true)
        setMovilDevelopment(false)
        setDesign(false)
        
    }
    const HandleMovilDevelopment=()=>{

        setMovilDevelopment(true)
       
        setWebDevelopment(false)
        setDesign(false)
     
    }
    const HandleDesign=()=>{
        setDesign(true)
        setWebDevelopment(false)
       
        setMovilDevelopment(false)
    }
    const Projects=()=>{
        if(webDevelopment===true){
            
            return(<ComponentesBackAndFrond colorTitulo={colortexto}/>)
        }
        if(movilDevelopment===true){
           
            return(<DesarrolloMovil/>)
        }
        if(design===true){
            
            return(<DisenoGrafico/>)
        }
    }
    useEffect(()=>{
        
    },[colortexto,claseTitulo])
    
    const ClaseBottom1=`${webDevelopment===true?"bg-black":"bg-indigo-700"} font-medium text-md hover:bg-gray-700 p-2 rounded-tl-xl rounded-br-xl text-white font-robotom lg:text-lg xl:text-xl xl:rounded-br-2xl xl:rounded-tl-2xl 2xl:text-2xl 2xl:rounded-tl-3xl 2xl:rounded-br-3xl`;
    const ClaseBottom2=`${movilDevelopment===true?"bg-black":"bg-indigo-700"} font-medium text-md  hover:bg-gray-700 p-2 rounded-tl-xl rounded-br-xl text-white font-robotom lg:text-lg xl:text-xl xl:rounded-br-2xl xl:rounded-tl-2xl 2xl:text-2xl 2xl:rounded-tl-3xl 2xl:rounded-br-3xl`;
    const ClaseBottom3=`${design===true?"bg-black":"bg-indigo-700"} font-medium text-md  hover:bg-gray-700 p-2 rounded-tl-xl rounded-br-xl text-white font-robotom lg:text-lg xl:text-xl xl:rounded-br-2xl xl:rounded-tl-2xl 2xl:text-2xl 2xl:rounded-tl-3xl 2xl:rounded-br-3xl`;
    return(
        <> 
      
        <section  className=" h-[140vh] sm:h-[142vh] md:h-[160vh] lg:h-[125vh] xl:h-[220vh]  2xl:h-[130vh] z-[25]  ">
        <h2 id="portafolio" className={claseTitulo}>PROJECTS</h2>
            <div className=" w-full h-[100px] flex justify-center items-center mb-[120px]">
            <Triangulo/>
            
            
            </div>
            
            <section className=" lg:grid lg:grid-cols-[auto] lg:w-full lg:h-[80vh] xl:grid xl:grid-cols-[auto] xl:items-center xl:w-[100%] md:mt-[50px]">

                <div className="relative -top-[80px] w-full h-[65px] pl-2 pr-2  grid grid-cols-[auto,auto,auto] gap-2 mb-[20px] xl:pl-[20px] xl:pr-[20px]">
                <button onClick={HandledWebDevelopment} className={ClaseBottom1}>Web Development</button >
                <button onClick={HandleMovilDevelopment} className={ClaseBottom2}>Movil Development</button>
                <button onClick={HandleDesign} className={ClaseBottom3}>Grafic Design</button>
                </div>
        <section className="w-full h-[500px] overflow-y-scroll xl:overflow-x-hidden  pt-[20px] pb-[20px] grid grid-cols-[auto] gap-4 justify-center items-center lg:grid lg:grid-cols-[auto] lg:gap-10   lg:h-[610px]  xl:w-full xl:h-[950px]   xl:grid xl:grid-cols-[auto]  xl:gap-[60px]  relative -top-[15vh] sm:relative sm:-top-[10vh] 2xl:mt-[50px]">
       {/*  <CartaPortafolio pagina={"desarrolloweb"}   imagen={"/img/desarrolloweb.png"}/>
        <CartaPortafolio pagina={"desarrollomovil"}  imagen={"/img/desarrollomovil.png"}/>
        <CartaPortafolio pagina={"disenografico"}  imagen={"/img/diseñografico.png"}/> */}
            {Projects()}
            
        </section>
        </section>
        </section>
        </>
    )
}