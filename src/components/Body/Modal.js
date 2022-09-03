import {colorFondoState} from "../../redux/slices/ColorFondoModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Modal({children,modalEstado,close}){
    const colorfondo=useSelector(colorFondoState);
    
 
    let fondoFull=`${colorfondo} p-[30px] h-[400px] w-[300px] rounded-lg fixed z-[80] top-[20%] left-[10%] sm:left-[27%] sm:top-[15%] md:left-[29%] lg:left-[35%] lg:top-[21%] xl:w-[1000px] xl:h-[550px] xl:top-[5%] xl:left-[13%] xl:rounded-2xl  2xl:top-[25%] 2xl:left-[17%] traslate-x-full duration-1000`
   
    console.log(colorfondo)
    let modal=`${modalEstado===true?fondoFull:""}`
    useEffect(()=>{
    },[colorfondo])
    return(

        <>
        
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
       
        </>
    )
}