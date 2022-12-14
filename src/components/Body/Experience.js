import CartaExperiencia from "./Cartas/CartaExperiencia";
import { useDispatch,useSelector } from "react-redux";
import {setColorExterior} from "../../redux/slices/ColorExteriorModals";
import { obtenerId} from "../../redux/slices/idExperiencia"
import {setColorFondoModal} from "../../redux/slices/ColorFondoModal";
import { stateActiveEspanish } from "../../redux/slices/cambioAspectoPagina";
import { useEffect } from "react";
import Modal from "./secciones/Modal"
import { useState } from "react"
import {experiencia} from "../../DatosUser/experiencia";
import Triangle from "./secciones/Triangle";
export default function Experience({colortexto,titleExperience}){
    const [modalEstado,setModalEstado]=useState(false)
    const [closee,setClosee]=useState(true)
    const activeEspanish=useSelector(stateActiveEspanish)
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

 
    let subtitulo=`duration-1000 transition-all font-bold font-robotob text-center text-[2.25rem] xl:text-[3.75rem] mt-[30px] mb-[30px] relative top-[82px] z-[50] lg:relative lg:top-[82px] xl:relative xl:top-[90px] 2xl:text-[3.75rem] 2xl:top-[90px] ${colortexto}`;
    return(
        <>
        <div className="h-auto sm:h-auto md:h-auto lg:h-[80vh]  2xl:h-auto xl:mb-[100px] ">
        <h2 id="experiencia" className={subtitulo}>{titleExperience}</h2>
        <div className=" w-full h-[100px] mb-[50px] flex justify-center items-center  sm:mb-[70px] md:mb-[90px] 2xl:mb-[260px] ">
            <Triangle/>
            </div>
        
         
        <section className=" w-full   grid grid-cols-[auto] gap-4 justify-center items-center xl:grid xl:grid-cols-[repeat(3,auto)] xl:gap-6  lg:grid lg:grid-cols-[auto,auto,auto] lg:mt-[10vh] md:grid md:grid-cols-[auto,auto]">
            {experiencia.map(data=>{
                return(
                    <CartaExperiencia 
                    AbrirModal={AbrirModal}
                     nId={data.id} 
                     trabajoTitulo={activeEspanish===true?data.espanish.trabajoTitulo:data.english.trabajoTitulo}
                     paginaExperiencia={activeEspanish===true?data.espanish.paginaExperiencia:data.english.paginaExperiencia}
                     paginaHithub={activeEspanish===true?data.espanish.paginaHithub:data.english.paginaHithub}
                     />

                )
            }
                
            )} 
        </section>
        </div>
           
        {modalEstado&&<Modal modalEstado={modalEstado} valorclose={closee} close={close}>

                    {experiencia.map(dato => {
                        if(dato.id===id){
                            dispatch(setColorFondoModal(activeEspanish===true?dato.espanish.fondocarta:dato.english.fondocarta))
                        }
                        return dato.id===id&&
                           
                            <div>
                            <h2 className="text-xl text-yellow-500 text-center font-bold font-robotob leading-relaxed tracking-wide xl:text-3xl xl:mb-[15px] 2xl:text-4xl">{activeEspanish===true?dato.espanish.trabajoTitulo:dato.english.trabajoTitulo}</h2>
                            <div className="grid grid-cols-2 gap-[3px]">
                            <span className="font-robotom font-medium text-white tracking-wide xl:text-xl 2xl:text-2xl">{activeEspanish===true?"Fecha de Inicio:":"Start date:"}</span>
                             <span className="font-robotor font-normal text-blue-100  tracking-normal xl:text-xl 2xl:text-2xl ">{activeEspanish===true?dato.espanish.trabajoFechaInicio:dato.english.trabajoFechaInicio}</span>
                              <span className="font-robotom font-medium text-white tracking-wide xl:text-xl 2xl:text-2xl">{activeEspanish===true?"Fecha de finalizaci??n:":"End date:"} </span>
                              <span className="font-robotor font-normal text-blue-100  tracking-normal xl:text-xl 2xl:text-2xl">{activeEspanish===true?dato.espanish.trabajoFechaFin:dato.espanish.trabajoFechaFin}</span>
                              
                            <span className="font-robotom font-medium text-white tracking-wide xl:text-xl 2xl:text-2xl">{activeEspanish===true?"Lugar:":"Locale:"} </span> <span className="font-robotor font-normal text-blue-100 tracking-normal xl:text-xl 2xl:text-2xl">{activeEspanish===true?dato.espanish.lugar:dato.english.lugar}</span> 
                            <span className="font-robotom font-medium text-white leading-relaxed tracking-wide xl:text-xl 2xl:text-2xl">{activeEspanish===true?"Empresa:":"Business:"} </span> <span className="font-robotor font-normal text-blue-100  tracking-normal xl:text-xl 2xl:text-2xl">{activeEspanish===true?dato.espanish.empresa:dato.english.empresa}</span>
                            </div>

                            <div className="xl:grid xl:grid-cols-2 xl:gap-4" >
                            <div className="bg-purple-600  shadow-lg p-[7px] h-[120px] rounded-md overflow-y-scroll ml-[8px] mt-[8px] xl:overflow-hidden xl:h-auto xl:rounded-xl xl:p-[15px]">
                            <span className="text-center text-white font-medium font-robotom leading-relaxed tracking-wide xl:text-xl 2xl:text-2xl">{activeEspanish===true?"RESPONSABILIDADES":"RESPONSIBILITIES"} </span>
                                {activeEspanish===true?dato.espanish.funciones?.map(funcion=>{
                                    const claseFromFunctions=`${funcion.color} p-[10px] mt-[10px] font-robotor text-blue-100 leading-relaxed tracking-normal xl:text-xl 2xl:text-2xl p-[5px] xl:mt-[10px] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg `
                                    return(

                                        <p key={funcion.id} className={claseFromFunctions}>{funcion.function}</p>
                                    )
                                }):dato.english.funciones?.map(funcion=>{
                                    const claseFromFunctions=`${funcion.color} p-[10px] mt-[10px] font-robotor text-blue-100 leading-relaxed tracking-normal xl:text-xl 2xl:text-2xl p-[5px] xl:mt-[10px] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg `
                                    return(

                                        <p key={funcion.id} className={claseFromFunctions}>{funcion.function}</p>
                                    )
                                })}
                               
                            </div>
                            <div className="bg-yellow-600 shadow-lg p-[7px] h-[100px] rounded-md overflow-y-scroll ml-[8px] mt-[8px] xl:h-auto xl:overflow-hidden xl:rounded-xl xl:p-[15px]">
                            <span className="text-center text-white font-medium font-robotom leading-relaxed tracking-wide xl:text-xl 2xl:text-2xl">{activeEspanish===true?"LOGROS":"KEY ACCOMPLISHMENTS"}</span>
                                {activeEspanish===true?dato.espanish.logros?.map(logro=>{
                                    const claseFromLogro=`${logro.color} p-[10px] mt-[10px] font-robotor text-blue-100 leading-relaxed tracking-normal xl:text-xl 2xl:text-2xl p-[5px] xl:mt-[10px] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg`
                                    return(
                                        <p key={logro.id} className={claseFromLogro}>{logro.logro}</p>
                                    )
                                }):dato.english.logros?.map(logro=>{
                                    const claseFromLogro=`${logro.color} p-[10px] mt-[10px] font-robotor text-blue-100 leading-relaxed tracking-normal xl:text-xl 2xl:text-2xl p-[5px] xl:mt-[10px] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg`
                                    return(
                                        <p key={logro.id} className={claseFromLogro}>{logro.logro}</p>
                                    )
                                })}
                                
                            </div>
                            </div>
                           
                            </div>
                            
                    }
                       
                    )}
            
             </Modal>}
        
       
        </>
    )
}