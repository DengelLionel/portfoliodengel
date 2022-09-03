import { NavBarStyle } from "../../css/Header/NavBarStyle"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { ObtenerCambioEstadoTema } from "../../redux/slices/cambioTema"
import {scrollToAnchorI,
    scrollToAnchorP,scrollToAnchorH,
    scrollToAnchorE,scrollToAnchorC
} from "./ScrollDesplazamiento";
import { valorScrollY} from "../../redux/slices/scrollYValor";
import { useSelector, useDispatch } from "react-redux";
import {setValorCategoriaNav} from "../../redux/slices/navActivo"
import {stateColorStyled} from "../../redux/slices/cambioAspectoPagina";
import ButoonTema from "./ButtonTema"
 function Nav({openState}){
    const [acceso,setAcceso]=useState(false);
    const dispatch=useDispatch();
    const [valor,setValor]=useState("");
    const [valorCategori,setValorCategori]=useState(true);
    const colorStyled=useSelector(stateColorStyled)
    useEffect(()=>{
     
        valorNav();
        CategoriaValor();
        valorF();
    },[dispatch,acceso])
    const handleButton=()=>{

        setAcceso(!acceso);
        localStorage.setItem('tema',!acceso)
        dispatch(ObtenerCambioEstadoTema(!acceso));//PARA CAMBIAR EL FONDO DE BLANCO A NEGRO 
    }
    let valorScroll=useSelector(valorScrollY);
   
        const CategoriaValor=()=>{
            setValorCategori(true)
            if(valorCategori===true){
                setValor("-100");
                dispatch(setValorCategoriaNav(false));
                 setValorCategori(false) 
                return valor;
            }   
            if(valorCategori===false){
                setValor("0");
                dispatch(setValorCategoriaNav(true));
                return valor;
            }  
           
        }
       
    const valorNav=()=>{
                
        if(openState===true){
        setValor("0")
        dispatch(setValorCategoriaNav(true));
        return  valor;
        }
         if(openState===false){
         setValor("-100%")
         dispatch(setValorCategoriaNav(false));
         return  valor;
        }                                            
    }
   
    const valorF=()=>{
        if(openState===false){
            return valorNav()
        }
        if(valorCategori===true){
           return CategoriaValor()
        }
    }

    return(
     
        <NavBarStyle 
        valorScroll={valorScroll} openState={valorF} fondoNav={colorStyled}>
            
               <Link to="/" className="pb-[20px] text-navcoloramarillo font-ronsard font-bold cursor-pointer xl:p-[15px] border-2  border-transparent hover:text-white sm:hover:bg-transparent sm:hover:rounded-md sm:hover:border-white sm:hover:text-white sm:hover:shadow-xl xl:hover:bg-transparent xl:hover:rounded-md xl:hover:border-white xl:hover:text-white xl:hover:shadow-xl sm:p-[5px] sm:text-sm lg:p-[20px] 2xl:text-2xl leading-relaxed tracking-widest xl:text-xl" onClick={()=>{scrollToAnchorI();CategoriaValor()}}>HOME</Link>
                <a className="font-ronsard font-bold pb-[20px] text-navcoloramarillo cursor-pointer xl:p-[15px] border-2 border-transparent hover:text-white sm:hover:bg-transparent sm:hover:rounded-md sm:hover:border-white sm:hover:text-white sm:hover:shadow-xl xl:hover:bg-transparent xl:hover:rounded-md xl:hidden xl:hover:border-white xl:hover:text-white xl:hover:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest sm:hidden" onClick={()=>{scrollToAnchorP();CategoriaValor()}}>PROJECTS</a>
                <a className="font-ronsard font-bold pb-[20px] text-navcoloramarillo cursor-pointer xl:p-[15px] border-2 border-transparent hover:text-white sm:hover:bg-transparent sm:hover:rounded-md sm:hover:border-white sm:hover:text-white sm:hover:shadow-xl xl:hover:bg-transparent xl:hover:rounded-md xl:hover:border-white xl:hover:text-white xl:hover:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest xl:text-xl" onClick={()=>{scrollToAnchorH();CategoriaValor()}} > SKILLS</a>
                <a className="font-ronsard font-bold pb-[20px] text-navcoloramarillo cursor-pointer xl:p-[15px] border-2 border-transparent hover:text-white sm:hover:bg-transparent sm:hover:rounded-md sm:hover:border-white sm:hover:text-white sm:hover:shadow-xl xl:hover:bg-transparent xl:hover:rounded-md xl:hover:border-white xl:hover:text-white xl:hover:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest xl:text-xl" onClick={()=>{scrollToAnchorE();CategoriaValor()}}>EXPERIENCES</a>
                <a className="font-ronsard font-bold pb-[20px] xl:hidden text-navcoloramarillo cursor-pointer xl:p-[15px] sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest lg:hidden" onClick={()=>{scrollToAnchorC();CategoriaValor()}}> <button type="button" className="text-white rounded-md bg-black hover:bg-degradadorojo p-2 xl:border-black xl:hover:border-white xl:border-2   leading-relaxed tracking-widest">CONTACT</button></a> 
                <a className="hidden xl:block xl:p-[15px] sm:block sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl"  type="button">
                    <ButoonTema handleButton={handleButton}/>
                </a>
         </NavBarStyle> 
       
    )
}
export default Nav