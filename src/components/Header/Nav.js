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
import {stateColorStyled,stateColorLineaHoverNavItems,setOpenMenuLenguage,stateOpenMenuLenguage,stateActiveEspanish,stateActiveEnglish,setActiveEspanish,setActiveEnglish} from "../../redux/slices/cambioAspectoPagina";
import ButoonTema from "./ButtonTema"
import ButtonLenguage from "./Secciones/ButtonLenguage";
import MenuLenguage from "./Secciones/MenuLenguage";
import {contentNav} from "../../DatosUser/Content";
 function Nav({openState}){
    const [acceso,setAcceso]=useState(false);
    const dispatch=useDispatch();
    const openMenuLenguage=useSelector(stateOpenMenuLenguage)
    const [valor,setValor]=useState("");
    const [valorCategori,setValorCategori]=useState(true);
    const colorStyled=useSelector(stateColorStyled);
    const activeEnglish=useSelector(stateActiveEnglish);
    const activeEspanish=useSelector(stateActiveEspanish);
    const getColorBodeItem=useSelector(stateColorLineaHoverNavItems)
    const OpenMenuLenguage=()=>{
        dispatch(setOpenMenuLenguage(true));
    }
    const ActiveEnglish=()=>{
        dispatch(setActiveEnglish(true))
        dispatch(setActiveEspanish(false))
    }
    const ActiveEspanish=()=>{
        dispatch(setActiveEspanish(true))
        dispatch(setActiveEnglish(false))
    }
    console.log("OPEN MENU : english ",activeEnglish)
    console.log("OPEN MENU : espanish ",activeEspanish)
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

    const itemNav1=`pb-[20px]  font-ronsard font-bold cursor-pointer xl:p-[15px] border-2  border-transparent ${getColorBodeItem} xl:before:shadow-xl  sm:p-[5px] sm:text-sm lg:p-[20px] 2xl:text-2xl leading-relaxed tracking-widest xl:text-xl duration-1000 transition-all`;
    const itemNav2=`font-ronsard  font-bold pb-[20px] cursor-pointer xl:p-[15px] border-2 border-transparent ${getColorBodeItem}  xl:before:shadow-xl  sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest sm:hidden duration-1000 transition-all`;
    const itemNav3=`font-ronsard font-bold pb-[20px]  cursor-pointer xl:p-[15px] border-2 border-transparent ${getColorBodeItem} xl:hover:before:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest xl:text-xl duration-1000 transition-all`;
    const itemNav4=`font-ronsard font-bold pb-[20px]  cursor-pointer xl:p-[15px] border-2 border-transparent ${getColorBodeItem} xl:before:hover:shadow-xl sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest xl:text-xl duration-1000 transition-all`;
    return(
        
        <NavBarStyle 
        valorScroll={valorScroll}
          openState={valorFinal}
           fondoNav={colorStyled}>
               
               <article  className="hidden md:block md:relative md:right-[60%]">
                <ButtonLenguage OpenClick={OpenMenuLenguage}/>
                </article>
                {openMenuLenguage===true&&<MenuLenguage ActiveEnglish={ActiveEnglish} ActiveEspanish={ActiveEspanish} />}
                {activeEspanish===true||activeEnglish===true?contentNav?.map(navs=>{
                    return(<>
                        <Link to="/" className={itemNav1}  onClick={()=>{scrollToAnchorI();CategoriaValor()}}>{activeEspanish===true?navs.español.item1:navs.english.item1}</Link>
                        <a className={itemNav2} onClick={()=>{scrollToAnchorP();CategoriaValor()}}>{activeEspanish===true?navs.español.item2:navs.english.item2}</a>
                        <a className={itemNav3} onClick={()=>{scrollToAnchorH();CategoriaValor()}} >{activeEspanish===true?navs.español.item3:navs.english.item3}</a>
                        <a className={itemNav4} onClick={()=>{scrollToAnchorE();CategoriaValor()}}>{activeEspanish===true?navs.español.item4:navs.english.item4}</a>
                        <a className="font-ronsard font-bold pb-[20px] xl:hidden text-navcoloramarillo cursor-pointer xl:p-[15px] sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest lg:hidden" onClick={()=>{scrollToAnchorC();CategoriaValor()}}> <button type="button" className="text-white rounded-md hover:bg-degradadorojo p-2 xl:hover:border-celesteclaro xl:border-2   leading-relaxed tracking-widest">{navs.español.item5}</button></a> 
                        <a className="hidden xl:block xl:p-[15px] sm:block sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl"  type="button">
                            <ButoonTema handleButton={handleButton}/>
                        </a>
                        </>
                    )
                }):(
                    <>
                        <Link to="/" className={itemNav1}  onClick={()=>{scrollToAnchorI();CategoriaValor()}}>HOME</Link>
                        <a className={itemNav2} onClick={()=>{scrollToAnchorP();CategoriaValor()}}>PROJECTS</a>
                        <a className={itemNav3} onClick={()=>{scrollToAnchorH();CategoriaValor()}} > SKILLS</a>
                        <a className={itemNav4} onClick={()=>{scrollToAnchorE();CategoriaValor()}}>EXPERIENCES</a>
                        <a className="font-ronsard font-bold pb-[20px] xl:hidden text-navcoloramarillo cursor-pointer xl:p-[15px] sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl  leading-relaxed tracking-widest lg:hidden" onClick={()=>{scrollToAnchorC();CategoriaValor()}}> <button type="button" className="text-white rounded-md hover:bg-degradadorojo p-2 xl:hover:border-celesteclaro xl:border-2   leading-relaxed tracking-widest">CONTACT</button></a> 
                        <a className="hidden xl:block xl:p-[15px] sm:block sm:p-[5px] sm:text-sm lg:p-[8px] 2xl:text-2xl"  type="button">
                            <ButoonTema handleButton={handleButton}/>
                        </a>
                        </>
                )
              
                 }
                <article className="font-ronsard font-bold cursor-pointer text-white md:hidden  ">
                    <article className="flex justify-center items-center">
                <ButtonLenguage/>
                <button className="p-[15px]">Español</button>
                <button>English</button>
                </article>
                
                </article>
               
         </NavBarStyle> 
       
    )
}
export default Nav