
import { useState,useEffect } from "react";
import MenuButton from "./ButtonAmburger";
import {HeaderStyle} from "../../css/Header/HeaderStyle";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setValorScrollY } from "../../redux/slices/scrollYValor";
import { ObtenerCambioEstadoTema } from "../../redux/slices/cambioTema"
import {setValorCategoriaNav,valorCategory} from "../../redux/slices/navActivo";
import {stateColorStyled} from "../../redux/slices/cambioAspectoPagina";
import ButoonTema from "./ButtonTema";
import Nav from "./Nav";


const Encabezado=()=>{
    const dispatch=useDispatch();
    const openState=useSelector(valorCategory);
    console.log("val",openState)
    const colorstyled=useSelector(stateColorStyled)
    const handleClick=()=>{
        dispatch(setValorCategoriaNav(!openState));
    }
   
    const [acceso,setAcceso]=useState(false);

   
    
    const [scrollYY,setScrollYY]=useState(0);
    dispatch(setValorScrollY(scrollYY));

useEffect(()=>{
    const posicionHeaderScroll=()=>setScrollYY(window.pageYOffset)
    window.addEventListener("scroll",posicionHeaderScroll)
    

},[scrollYY,openState])


   
    //hacer un slices para scrollYY
    const handleButton=()=>{
        setAcceso(!acceso);
        dispatch(ObtenerCambioEstadoTema(acceso));
    }
  
    return (
        
        <HeaderStyle valorNav={openState} fondoheader={colorstyled} scrollVertical={scrollYY} >
             <Link className="relative top-[20px] left-[20px] xl:hidden xl:relative xl:left-0 xl:top-0  xl:p-[10px] sm:hidden" to="#" type="button">
                    <ButoonTema acceso={acceso} handleButton={handleButton} />
                </Link>
           <Nav openState={openState}/>
           <MenuButton openState={openState} handleClick={handleClick}/>
        </HeaderStyle>
       
    )

}
export default Encabezado;