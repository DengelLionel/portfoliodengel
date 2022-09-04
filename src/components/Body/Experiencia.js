import CartaExperiencia from "./CartaExperiencia";
import { useDispatch,useSelector } from "react-redux";
import {setColorExterior} from "../../redux/slices/ColorExteriorModals";
import { obtenerId} from "../../redux/slices/idExperiencia"
import {setColorFondoModal} from "../../redux/slices/ColorFondoModal";
import { useEffect } from "react";
import Modal from "./Modal"
import { useState } from "react"
import {experiencia} from "../../DatosUser/experiencia";
import Triangulo from "./secciones/Triangulo";
export default function Experiencia({colortexto}){
    const [modalEstado,setModalEstado]=useState(false)
    const [closee,setClosee]=useState(true)
    
    const dispatch=useDispatch()
    const id=useSelector(obtenerId)
    useEffect(()=>{

    },[id])
    const AbrirModal=()=>{
        setModalEstado(!modalEstado)
        dispatch(setColorExterior(true));
    }
    const close=()=>{
        setClosee(!closee)
        setModalEstado(false)
        dispatch(setColorExterior(false));
        return closee
    }
    console.log(id)
 
    let subtitulo=`font-bold font-robotob text-center text-xl xl:text-2xl mt-[30px] mb-[30px] relative top-[70px] z-[50] lg:relative lg:top-[70px] xl:relative xl:top-[75px] 2xl:text-3xl 2xl:top-[75px] ${colortexto}`;
    return(
        <>
        <div className="h-[108vh] sm:h-[117vh] md:h-[90vh] lg:h-[80vh]  2xl:h-[120vh] ">
        <h2 id="experiencia" className={subtitulo}>EXPERIENCES</h2>
        <div className=" w-full h-[100px] mb-[50px] flex justify-center items-center  sm:mb-[160px] md:mb-[180px] 2xl:mb-[260px] ">
            <Triangulo/>
            </div>
        
         
        <section className=" w-full sm:relative sm:-top-[18vh] xl:relative xl:-top-[18vh] grid grid-cols-[auto] gap-4 justify-center items-center xl:grid xl:grid-cols-[repeat(3,auto)] xl:gap-6 lg:grid lg:grid-cols-[auto,auto,auto] lg:mt-[10vh] md:grid md:grid-cols-[auto,auto]">
            {experiencia.map(data=>{
                return(
                    <CartaExperiencia 
                    AbrirModal={AbrirModal}
                     nId={data.id} 
                     trabajoTitulo={data.trabajoTitulo}
                     paginaExperiencia={data.paginaExperiencia}
                     paginaHithub={data.paginaHithub}
                     />

                )
            }
                
            )} 
        </section>
        </div>
           
        {modalEstado?(<Modal modalEstado={modalEstado} valorclose={closee} close={close}>

                    {experiencia.map(dato => {
                        if(dato.id===id){
                            dispatch(setColorFondoModal(dato.fondocarta))
                        }
                        return dato.id===id?(
                            <> 
                            <div>
                            <h2 className="text-xl text-yellow-900 text-center font-robotob leading-relaxed tracking-wide xl:text-3xl xl:mb-[15px] 2xl:text-4xl">{dato.trabajoTitulo}</h2>
                            <div className="grid grid-cols-2 gap-[3px]">
                            <span className="font-robotom text-white tracking-wide xl:text-xl 2xl:text-2xl">Fecha de Inicio: </span>
                             <span className="font-robotor text-blue-100  tracking-normal xl:text-xl 2xl:text-2xl ">{dato.trabajoFechaInicio}</span>
                              <span className="font-robotom text-white tracking-wide xl:text-xl 2xl:text-2xl">Fecha Fin: </span>
                              <span className="font-robotor text-blue-100  tracking-normal xl:text-xl 2xl:text-2xl">{dato.trabajoFechaFin}</span>
                              
                            <span className="font-robotom text-white tracking-wide xl:text-xl 2xl:text-2xl">Lugar: </span> <span className="font-robotor text-blue-100 tracking-normal xl:text-xl 2xl:text-2xl">{dato.lugar}</span> 
                            <span className="font-robotom text-white leading-relaxed tracking-wide xl:text-xl 2xl:text-2xl">Empresa: </span> <span className="font-robotor text-blue-100  tracking-normal xl:text-xl 2xl:text-2xl">{dato.empresa}</span>
                            </div>

                            <div className="xl:grid xl:grid-cols-2 xl:gap-4" >
                            <div className="bg-purple-600 shadow-lg p-[7px] h-[80px] rounded-md overflow-y-scroll ml-[8px] mt-[8px] sm:overflow-hidden xl:rounded-xl xl:p-[15px]">
                            <span className="text-center text-white font-robotom leading-relaxed tracking-wide xl:text-xl 2xl:text-2xl">Funciones Laborales </span>
                                <p className="font-robotor text-blue-100 leading-relaxed tracking-normal xl:text-xl 2xl:text-2xl">{dato.funciones}</p>
                            </div>
                            <div className="bg-yellow-600 shadow-lg p-[7px] h-[80px] rounded-md overflow-y-scroll ml-[8px] mt-[8px] sm:overflow-hidden xl:rounded-xl xl:p-[15px]">
                            <span className="text-center text-white font-robotom leading-relaxed tracking-wide xl:text-xl 2xl:text-2xl">Logros</span>
                                <p className="font-robotor text-blue-100 leading-relaxed tracking-normal xl:text-xl 2xl:text-2xl">{dato.logros}</p>
                            </div>
                            </div>
                           
                            </div>
                            </>
                        ):("")
                    }
                       
                    )}
            
             </Modal>):("")}
        
       
        </>
    )
}