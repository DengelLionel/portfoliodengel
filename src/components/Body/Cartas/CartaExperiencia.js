import { useEffect } from "react";
import {setIdExperiencia} from "../../../redux/slices/idExperiencia";
import { useDispatch, useSelector } from "react-redux";
import {stateColorCartaExperiencia,stateColorBotonExperiencia,stateActiveEspanish} from "../../../redux/slices/cambioAspectoPagina";
export default function CartaExperiencia({trabajoTitulo,AbrirModal,nId,paginaExperiencia,paginaHithub}){
    const dispatch=useDispatch()
    const activeEspanish=useSelector(stateActiveEspanish)
    useEffect(()=>{

    },[dispatch])
    const getColorCarta=useSelector(stateColorCartaExperiencia)
    const getColorBotonCarta=useSelector(stateColorBotonExperiencia)    
    return(
        <>
        
        <article class={`w-[200px] p-[12px] lg:w-[300px] lg:h-[300px] duration-1000 transition-all ${getColorCarta}  rounded-xl xl:w-[300px] xl:h-[300px] xl:p-[15px] 2xl:w-[350px] 2xl:h-[350px]`}>
            <h3 class="font-bold font-robotob text-center text-white ml-2  xl:text-xl lg:text-lg 2xl:text-2xl">{trabajoTitulo}</h3>
            <div className=" flex flex-row justify-center xl:h-[150px] items-center gap-2">
                {paginaExperiencia===""?(<div className="bg-blue-600 w-[70px] h-[70px] flex flex-row justify-center items-center rounded-full hover:bg-blue-900 hover:shadow-sm xl:shadow-xl cursor-no-drop duration-1000 transition-all">
                <img  alt="img" src="/img/net.svg"/>      
                </div>):(<div className="bg-blue-600 w-[70px] h-[70px] flex flex-row justify-center items-center rounded-full hover:bg-blue-900 hover:shadow-sm xl:shadow-xl cursor-pointer duration-1000 transition-all">
                <a href={paginaExperiencia} target="_blank  ">
                <img  alt="img" src="/img/net.svg"/>
                </a>
               
                </div>)}
            
                {paginaHithub===""?(<div className="bg-green-400 hover:text-blue-700 hover:bg-white hover:shadow-sm xl:hover:shadow-xl w-[70px] h-[70px] flex flex-row justify-center items-center rounded-full cursor-no-drop duration-1000 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
               </div>):(<div className="bg-green-400 hover:text-blue-700 hover:bg-white hover:shadow-sm xl:hover:shadow-xl w-[70px] h-[70px] flex flex-row justify-center items-center rounded-full cursor-pointer duration-1000 transition-all">
                   
                   <a href={paginaHithub} target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
               </a>
               </div>)}
                
               
                </div>
                <button onClick={()=>{AbrirModal(); dispatch(setIdExperiencia(nId))}} className="flex  justify-center items-center mt-[20px] cursor-pointer w-full">
                <div className={`font-medium w-[130px] ${getColorBotonCarta} shadow-xl text-white text-center p-[5px] rounded-md sm:w-[180px] sm:p-[8px] xl:text-xl xl:w-full xl:rounded-xl lg:text-lg 2xl:text-2xl 2xl:w-[250px] 2xl:p-[10px] duration-1000 transition-all`}>
                    <span>{activeEspanish===true?"M??S INFORMACI??N":"More Information"}</span>
                </div>
                </button>
                
            </article>
           
            
        </>
    )
}