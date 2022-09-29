import {colorFondoState} from "../../redux/slices/ColorFondoModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {ColorExteriorModal} from "../../redux/slices/ColorExteriorModals";
import ReactDOM from "react-dom";
export default function Modal({children,modalEstado,close}){
    const colorfondo=useSelector(colorFondoState);
    
 
    let fondoFull=`${colorfondo} p-[30px] h-auto w-[300px] rounded-lg fixed z-[80]  xl:w-[1000px] xl:h-[550px]  xl:rounded-2xl  traslate-x-full duration-1000`
   
    console.log(colorfondo)
    const colorExteriorMostrar=useSelector(ColorExteriorModal)
    let modal=`${modalEstado===true&&fondoFull}`
    useEffect(()=>{
    },[colorfondo,colorExteriorMostrar])
    let fondo=` ${colorExteriorMostrar===true?"fixed top-0  bg-negrotransparente z-[80] w-full h-full flex justify-center items-center":"bg-transparent "}`
    return  (

        <>
          {colorExteriorMostrar&&ReactDOM.createPortal( <div className={fondo}>
            <div className={modal}>
        <div className="" >
            <button onClick={close} className="w-[30px] h-[30px] bg-white  rounded-full absolute left-[285px] -top-[10px] flex flex-row justify-center items-center xl:absolute xl:left-[980px] xl:w-[50px] xl:h-[50px]">
            <svg  width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#53464D"/>
        </svg> 
            </button>
            <div>
            {children}
            </div>

        </div>
        </div>
          </div>,document.querySelector("#portal1"))}   
        
       
        </>
    )
}