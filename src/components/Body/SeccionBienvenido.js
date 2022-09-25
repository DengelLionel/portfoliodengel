import {scrollToAnchorP,scrollToAnchorC} from "../Header/ScrollDesplazamiento";
import {stateColor,stateColorPerfil,stateColorTextoSobremi,stateColorBoton,stateColorBordeBoton,stateColorHoverBordeBoton,stateColorBeforeBoton} from "../../redux/slices/cambioAspectoPagina";

import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function SeccionBienvenido(){
        const getColor=useSelector(stateColor)
        const getColorPerfil=useSelector(stateColorPerfil)
        const getColorTextoSobremi=useSelector(stateColorTextoSobremi)
        const getColorBoton=useSelector(stateColorBoton)
        const getColorBordeBoton=useSelector(stateColorBordeBoton)
        const getColorHoverBordeBoton=useSelector(stateColorHoverBordeBoton)
        const getColorBeforeBoton=useSelector(stateColorBeforeBoton)
        const colorContenedor=`${getColor} duration-700 w-full h-[670px] z-[50] p-4  lg:h-[640px]  2xl:h-[800px] xl:rounded-bl-[130px] xl:rounded-br-[130px] rounded-bl-[50px]  md:h-[500px]  md:relative md:top-[40px] sm:rounded-br-[100%] sm:rounded-bl-[0px] sm:h-[500px]  sm:z-[70] sm:relative sm:-top-[80px]  `
        const colorPerfil=`hidden w-[160px] h-[160px] lg:w-[300px] lg:h-[300px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] rounded-full ${getColorPerfil} sm:flex justify-center items-center sm:relative sm:-top-[30px] `
        const colorTextoSobremi=`font-bold text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-robotob ${getColorTextoSobremi} tracking-wide 2xl:mb-8 sm:mb-3`
        const colorsBoton=`border-4 ${getColorBordeBoton} ${getColorBoton} p-[10px] font-bold text-sm font-robotob rounded text-white w-[130px] text-center ${getColorHoverBordeBoton} ${getColorBeforeBoton} xl:cursor-pointer xl:text-xl xl:w-[170px] xl:text-center xl:rounded-2xl xl:hover:shadow-xl  2xl:w-[220px] 2xl:text-2xl 2xl:p-[20px] lg:rounded-lg lg:text-lg lg:w-[200px] lg:text-center sm:relative sm:-top-[210px] sm:left-[200px]  md:relative md:-top-0 md:-left-0`
        const colorsBotonEspecial=`hidden xl:block font-bold border-4 ${getColorBordeBoton} ${getColorBoton} p-[10px] font-robotob rounded text-white ${getColorHoverBordeBoton} ${getColorBeforeBoton} xl:cursor-pointer xl:text-xl xl:w-[170px] xl:text-center xl:rounded-2xl lg:hidden xl:hover:shadow-xl 2xl:w-[220px] 2xl:text-2xl 2xl:p-[20px] lg:rounded-lg lg:text-lg lg:w-[200px] lg:text-center`
        useEffect(()=>{

        },[getColor,getColorHoverBordeBoton,getColorBeforeBoton,colorsBoton])
       
    return(
        <> 
            <section className={colorContenedor}>
            
         <section className="flex justify-center items-center relative top-[60px] xl:relative xl:top-[10vh]"> 
        <section className="border-dashed border-t-4 border-b-4 p-4 border-bordemorado xl:p-4 xl:border-t-[0px] xl:border-b-[0px] md:border-t-[0px] md:border-b-[0px]  sm:border-t-[0px] sm:border-b-[0px] flex justify-center items-center sm:relative sm:-top-[40px] md:relative md:-top-0"> 
           
            {/*  Para pantallas xl */}
            <section className=" xl:flex xl:justify-center xl:items-center  lg:flex lg:flex-col lg:justify-center lg:items-center" >
                <section className="grid grid-cols-[auto] sm:grid sm:grid-cols-[auto,auto] sm:w-[85%] sm:gap-0 md:grid md:grid-cols-[auto,auto] xl:grid xl:grid-cols-[auto,auto]  xl:w-[90%] ">
                    <section className="w-full  sm:w-[80%] lg:w-[80%] xl:w-[80%]" >
               <p className={colorTextoSobremi}>About me</p>
               <span className="font-medium text-xl lg:text-xl xl:text-2xl  2xl:text-3xl font-robotom text-white tracking-wide sm:mb-3">Hello Word!</span>
               <div className=" font-normal text-md lg:text-xl xl:text-2xl 2xl:text-3xl xl:p-2  font-robotor grid grid-rows-[auto,auto,auto]   xl:grid xl:grid-rows-[auto,auto,auto] ">
                   <span className="xl:mb-4 2xl:mb-8 sm:mb-3 text-white tracking-wide"> My name is Dengel and I'm 24 years old, I'm from the province of Jauja in Perú.</span>
                   <span className="xl:mb-4 2xl:mb-8 sm:mb-3 text-white tracking-wide">I'm freelancer developer FullStack javascript and php. I perform in web development and mobile development. From a very young age I'm passionate for technology.</span>
                   <span className="xl:mb-4 2xl:mb-8 text-white tracking-wide">I'm a person eager learn and I like to acquire new knowledge and skills.</span>
               </div>
               </section>
                <section className="w-full flex justify-center items-center">
                    <div className={colorPerfil}>
                    <img loading='lazy' alt="img" className=" w-[150px] h-[150px] lg:w-[290px] lg:h-[290px]  xl:w-[300px] xl:h-[300px] 2xl:w-[330px] 2xl:h-[330px] rounded-full" src="img/perfilbajado.jpg" />
                    </div>
                   
                </section>
               </section>
            </section>
        </section>
    </section>
        <br/>
         <section className="font-medium grid items-center justify-center relative top-[60px] md:relative md:-left-[220px]   xl:relative xl:top-[40px] grid-cols-[repeat(3,auto)] gap-[20px] lg:relative lg:top-[80px] 2xl:top-[100px]"> 
         <a type="button" className={colorsBoton} href="media/cvdevelopmentdengel.pdf" download >DOWNLOAD CV</a> 
        <a type="button" className={colorsBoton}  onClick={scrollToAnchorP}>PROJECTS</a> 
        <a type="button" className={colorsBotonEspecial}  onClick={scrollToAnchorC}>CONTACT</a>
        </section>
     </section> 
    
     </>
        
    )
}