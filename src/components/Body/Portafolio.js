import { useEffect,useState } from "react";
import Triangulo from "./secciones/Triangulo";
import ComponentesBackAndFrond from "../../Pages/DesarrolloWeb/ComponentesBackAndFrond";
import DesarrolloMovil from "../../Pages/DesarrolloMovil";
import DisenoGrafico from "../../Pages/DiseñoGrafico";
import {stateColorBotonCategoriaProyecto,stateColorBotonCategoriaProyectoActivo,stateColorBotonCategoriaProyectoHover} from "../../redux/slices/cambioAspectoPagina";
import { useSelector } from "react-redux";

export default function Portafolio({colortexto}){

    const [webDevelopment,setWebDevelopment]=useState(true)
    const [movilDevelopment,setMovilDevelopment]=useState(false)
    const [design,setDesign]=useState(false)
    const getColorCategoriaProyecto=useSelector(stateColorBotonCategoriaProyecto);
    const getColorCategoriaProyectoHover=useSelector(stateColorBotonCategoriaProyectoHover)
    const getColorCategoriaProyectoActivo=useSelector(stateColorBotonCategoriaProyectoActivo)         
   
    
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
        
    },[colortexto,getColorCategoriaProyecto,getColorCategoriaProyectoHover])
    
    return(
        <> 
      
        <section  className=" h-[155vh] sm:h-auto md:auto lg:h-[155vh] xl:h-auto  2xl:h-[145vh] z-[25]  ">
        <h2 id="portafolio" className={`duration-1000 transition-all relative top-[85px] z-[50] font-bold font-robotob text-center text-[2.25rem] xl:text-[3.75rem] mb-[30px] xl:relative xl:top-[90px] 2xl:text-[3.75rem] 2xl:relative 2xl:top-[165px] ${colortexto}`}>PROJECTS</h2>
            <div className=" w-full h-[100px]  2xl:mt-[100px] 2xl:mb-[150px] flex justify-center items-center mb-[120px]">
            <Triangulo/>
            
            
            </div>
            
            <section className=" lg:grid lg:grid-cols-[auto] lg:w-full lg:h-[80vh] xl:grid xl:grid-cols-[auto] xl:mt-[200px] xl:items-center xl:w-[100%]  md:mt-[50px]">

                <div className="relative -top-[80px] w-full h-[65px] pl-2 pr-2  grid grid-cols-[auto,auto,auto] gap-2 mb-[20px] xl:grid xl:grid-cols-[auto,auto] xl:pl-[20px] xl:pr-[20px]">
                <button onClick={HandledWebDevelopment} className={`${getColorCategoriaProyectoHover&&getColorCategoriaProyectoHover} ${webDevelopment===true?getColorCategoriaProyectoActivo:getColorCategoriaProyecto}  font-medium text-md  p-2 rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl  font-robotom lg:text-lg xl:text-xl xl:rounded-bl-2xl xl:rounded-tr-2xl xl:rounded-br-2xl xl:rounded-tl-2xl 2xl:text-2xl 2xl:rounded-tl-3xl 2xl:rounded-br-3xl  2xl:rounded-tr-3xl 2xl:rounded-bl-3xl duration-1000 transition-all`}>Web Development</button >
                <button onClick={HandleMovilDevelopment} className={`${getColorCategoriaProyectoHover&&getColorCategoriaProyectoHover} ${movilDevelopment===true?getColorCategoriaProyectoActivo:getColorCategoriaProyecto} font-medium text-md  p-2 rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl  font-robotom lg:text-lg xl:text-xl xl:rounded-bl-2xl xl:rounded-tr-2xl xl:rounded-br-2xl xl:rounded-tl-2xl 2xl:text-2xl 2xl:rounded-tl-3xl 2xl:rounded-br-3xl  2xl:rounded-tr-3xl 2xl:rounded-bl-3xl duration-1000 transition-all`}>Mobile Development</button>
           
                </div>
        <section className="w-full h-[500px] mt-[50px]   pt-[20px] pb-[20px] grid grid-cols-[auto] gap-4 justify-center items-center lg:grid lg:grid-cols-[auto] lg:gap-10   lg:h-[610px]  xl:w-full xl:overflow-hidden xl:h-auto xl:grid xl:grid-cols-[auto]  xl:gap-[60px]  relative -top-[15vh] sm:relative sm:-top-[10vh] 2xl:mt-[50px]">
 
            {Projects()}
            
        </section>
        </section>
        </section>
        </>
    )
}