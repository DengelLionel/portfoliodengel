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
import {stateColorStyled,stateColorLineaHoverNavItems} from "../../redux/slices/cambioAspectoPagina";
import ButoonTema from "./ButtonTema"

 function Nav({openState}){
    const [acceso,setAcceso]=useState(false);
    const dispatch=useDispatch();

    const [valor,setValor]=useState("");
    const [valorCategori,setValorCategori]=useState(true);
    const colorStyled=useSelector(stateColorStyled);
    const getColorBodeItem=useSelector(stateColorLineaHoverNavItems)
    useEffect(()=>{
     
        valorNav();
        CategoriaValor();
        valorFinal();
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
                setValor("-100%");
                dispatch(setValorCategoriaNav(false));
                 setValorCategori(false) 
                return valor;
            }   
            else if(valorCategori===false){
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
         else if(openState===false){
         setValor("-100%")
         dispatch(setValorCategoriaNav(false));
         return  valor;
        }                                            
    }
   
    const valorFinal=()=>{
        if(openState===false){
            return valorNav()
        }
        else if(valorCategori===true){
           return CategoriaValor()
        }
    }
    console.log("valor ",valor)
    const itemNav1=`pb-[20px]  font-ronsard font-bold cursor-pointer xl:p-[15px] border-2  border-transparent ${getColorBodeItem} xl:before:shadow-xl  sm:p-[5px] sm:text-sm lg:p-[20px] 2xl:text-2xl leading-relaxed tracking-widest xl:text-xl duration-1000 transition-all`;
    const itemNav2=`font-ronsard  font-bold pb-[20px] cursor-pointer xl:p-[15px] border-2 border-transparent ${getColorBodeItem}  xl:before:shadow-xl  sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest sm:hidden duration-1000 transition-all`;
    const itemNav3=`font-ronsard font-bold pb-[20px]  cursor-pointer xl:p-[15px] border-2 border-transparent ${getColorBodeItem} xl:hover:before:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest xl:text-xl duration-1000 transition-all`;
    const itemNav4=`font-ronsard font-bold pb-[20px]  cursor-pointer xl:p-[15px] border-2 border-transparent ${getColorBodeItem} xl:before:hover:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest xl:text-xl duration-1000 transition-all`;
    return(
     
        <NavBarStyle 
        valorScroll={valorScroll}
          openState={valorFinal}
           fondoNav={colorStyled}>
            
               <Link to="/" className={itemNav1}  onClick={()=>{scrollToAnchorI();CategoriaValor()}}>HOME</Link>
                <a className={itemNav2} onClick={()=>{scrollToAnchorP();CategoriaValor()}}>PROJECTS</a>
                <a className={itemNav3} onClick={()=>{scrollToAnchorH();CategoriaValor()}} > SKILLS</a>
                <a className={itemNav4} onClick={()=>{scrollToAnchorE();CategoriaValor()}}>EXPERIENCES</a>
                <a className="font-ronsard font-bold pb-[20px] xl:hidden text-navcoloramarillo cursor-pointer xl:p-[15px] sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest lg:hidden" onClick={()=>{scrollToAnchorC();CategoriaValor()}}> <button type="button" className="text-white rounded-md hover:bg-degradadorojo p-2 xl:hover:border-celesteclaro xl:border-2   leading-relaxed tracking-widest">CONTACT</button></a> 
                <a className="hidden xl:block xl:p-[15px] sm:block sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl"  type="button">
                    <ButoonTema handleButton={handleButton}/>
                </a>
         </NavBarStyle> 
       
    )
}
export default Nav