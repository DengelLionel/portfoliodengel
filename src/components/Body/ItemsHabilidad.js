import { useState,useEffect } from "react";
import { habilidades } from "./secciones/ItemsH";
import {stateGrayScale} from "../../redux/slices/cambioColorPagina";
import {setColorAspecto,setColorStyled,setColorSeccionHabilidad,setColorSeccionContacto,setColorPerfil,setColorTextoSobromi,setColorBoton,setColorBordeBoton,setColorHoverBordeBoton,setColorBeforeBoton,setColorLineaHoverNavItems,setColorTriangulo,setTituloColorNoche,setTituloColorDia,setColorBotonCategoriaProyectoActivo,setColorBotonCategoriaProyecto,setColorBotonCategoriaProyectoHover,setColorCartaExperiencia,setColorBotonExperiencia,setColorParrafoBienvenida} from "../../redux/slices/cambioAspectoPagina";
import { useDispatch,useSelector } from "react-redux";
export default function ItemsHabilidades({valorItem,clickItem}){
   
  const [stateItem,setStateItem]=useState({id:null,state:valorItem})
    const [idHabilidad,setIdHabilidad]=useState([])
    const valorItemFinal=useSelector(stateGrayScale)
    const dispatch=useDispatch()
   

    const stadoDelItem=(item1,item2)=>{
        setStateItem({id:item1,state:!item2})
        habilidades.map((skills)=>{
            if(skills.id===stateItem.id){
                skills.state=!item2;
            }
            
        })
        
    }
    const cambioColor=()=>{
        switch(stateItem.id){
            case 1:
               return dispatch(setColorAspecto("bg-degradadoitemuno duration-1000 transition-all")),
                        dispatch(setColorStyled("linear-gradient(to left,#AD8214,#AD8410)")),
                            dispatch(setColorSeccionHabilidad("bg-degradadoitemuno")),
                            dispatch(setColorSeccionContacto("bg-degradadoitemuno")),
                            dispatch(setColorPerfil("bg-white")),
                            dispatch(setColorTextoSobromi("text-black")),
                            dispatch(setColorBoton("bg-plomo1")),
                            dispatch(setColorParrafoBienvenida("text-white")),
                            dispatch(setColorBordeBoton("border-amarilloclaro")),
                            dispatch(setColorHoverBordeBoton("hover:border-white")),
                            dispatch(setColorBeforeBoton("hover:bg-black overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash1")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                            dispatch(setColorTriangulo("border-l-trianguloamarillo")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-plomo2")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemuno border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-amarillo2  border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-amarillo3")),
                            dispatch(setColorCartaExperiencia("bg-amarillo3")),
                            dispatch(setColorBotonExperiencia("bg-amarillo3 hover:border-white  border-2 border-amarilloclaro"))

            case 2:
               return dispatch(setColorAspecto("bg-degradadoitemdos")),
                        dispatch(setColorStyled("linear-gradient(to left,#03545e,#008072)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemdos")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemdos")),
                        dispatch(setColorParrafoBienvenida("text-white")),

                        dispatch(setColorPerfil("bg-degradadoverdeperfil2")),
                            dispatch(setColorTextoSobromi("text-verdeclaro")),
                            dispatch(setColorBoton("bg-verdeoscuro")),
                            dispatch(setColorBordeBoton("border-verdeclaro")),
                            dispatch(setColorHoverBordeBoton("hover:border-verde1")),
                            dispatch(setColorBeforeBoton("hover:bg-verdeoscuro overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash2")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                            dispatch(setColorTriangulo("border-l-verdeclaro4")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-white")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemdos border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-verdeclaro4  border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-verdeoscuro")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemdos")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemdos hover:border-white  border-2 border-verdeclaro2"))
            case 3:
            return dispatch(setColorAspecto("bg-degradadoitemtres")),
                        dispatch(setColorStyled("linear-gradient(to left,#0B56FF,#1627FF)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemtres")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemtres")),
                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorPerfil("bg-degradadoverdeperfil3")),
                            dispatch(setColorTextoSobromi("text-azulclaro1")),
                            dispatch(setColorBoton("bg-azul5")),
                            dispatch(setColorBordeBoton("border-azulclaro1")),
                            dispatch(setColorHoverBordeBoton("hover:border-azul6")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash2")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                            dispatch(setColorTriangulo("border-l-azul5")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-white")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemtres border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-azul5  border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-azuloscuro")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemtres")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemtres hover:border-white  border-2 border-azulclaro1"))
            case 4:
            return dispatch(setColorAspecto("bg-degradadoitemcuatro")),
                        dispatch(setColorStyled("linear-gradient(to left,#2787DE,#095082)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemcuatro")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemcuatro")),

                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorPerfil("bg-degradadoverdeperfil4")),
                            dispatch(setColorTextoSobromi("text-azulclaro1")),
                            dispatch(setColorBoton("bg-transparent")),
                            dispatch(setColorBordeBoton("border-azulclaro1")),
                            dispatch(setColorHoverBordeBoton("hover:border-celesteclaro2")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash2")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                            dispatch(setColorTriangulo("border-l-celeste3")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-white")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemcuatro border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-azul5 border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-celesteoscuro")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemcuatro")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemcuatro hover:border-white  border-2 border-celeste4"))
            case 5:
            return dispatch(setColorAspecto("bg-degradadoitemcinco")),
                        dispatch(setColorStyled("linear-gradient(to right,#f25c05,#f97000)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemcinco")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemcinco")),

                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorPerfil("bg-degradadoverdeperfil5")),
                            dispatch(setColorTextoSobromi("text-amarillo4")),
                            dispatch(setColorBoton("bg-transparent")),
                            dispatch(setColorBordeBoton("border-white")),
                            dispatch(setColorHoverBordeBoton("hover:border-naranjaoscuro1")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash5")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                            dispatch(setColorTriangulo("border-l-naranjaclaro")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-black")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemcinco border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-naranjaoscuro1 border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-naranjaoscuro2")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemcinco")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemcinco hover:border-white  border-2 border-naranjaclaro"))
            case 6:
            return dispatch(setColorAspecto("bg-degradadoitemseis")),
                        dispatch(setColorStyled("linear-gradient(to left,#f31410,#3a10f3)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemseis")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemseis")),

                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorPerfil("bg-degradadoverdeperfil5")),
                            dispatch(setColorTextoSobromi("text-amarillo4")),
                            dispatch(setColorBoton("bg-transparent")),
                            dispatch(setColorBordeBoton("border-white")),
                            dispatch(setColorHoverBordeBoton("hover:border-amarillo6")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash5")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                            dispatch(setColorTriangulo("border-l-rojo4")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-white")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemseis border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadobotonactivo border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-rojo4")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemseis")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemseis hover:border-white  border-2 border-naranjaclaro"))
            case 7:
            return dispatch(setColorAspecto("bg-degradadoitemsiete")),
                        dispatch(setColorStyled("linear-gradient(to left,#f50c0c,#561717)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemsiete")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemsiete")),

                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorPerfil("bg-degradadoverdeperfil7")),
                            dispatch(setColorTextoSobromi("text-amarillo4")),
                            dispatch(setColorBoton("bg-transparent")),
                            dispatch(setColorBordeBoton("border-rojoclaro")),
                            dispatch(setColorHoverBordeBoton("hover:border-amarillo6")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash5")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-rojoclaro text-white")),
                            dispatch(setColorTriangulo("border-l-rojo4")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-white")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemsiete border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadobotonactivo border-4 border-rojoclaro text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-degradadohovercategoria")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemsiete")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemsiete hover:border-rojoclaro hover:bg-degradadohocercategoria  border-2 border-naranjaclaro"))
            case 8:
            return dispatch(setColorAspecto("bg-degradadoitemocho")),
                        dispatch(setColorStyled("linear-gradient(to left,#ead41c,#e8c811)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemocho")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemocho")),

                        dispatch(setColorPerfil("bg-degradadoverdeperfil8")),
                            dispatch(setColorTextoSobromi("text-black")),
                            dispatch(setColorBoton("bg-black")),
                            dispatch(setColorBordeBoton("border-white")),
                            dispatch(setColorHoverBordeBoton("hover:border-amarillo6")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash5")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-black")),
                            dispatch(setColorParrafoBienvenida("text-black")),
                            dispatch(setColorTriangulo("border-l-amarillo7")),
                            dispatch(setTituloColorNoche("text-black")),
                            dispatch(setTituloColorDia("text-black")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemocho border-4 border-transparent text-black")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadohovercategoria8 border-4 border-white text-black")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-degradadohovercategoria8")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemocho")),
                            dispatch(setColorBotonExperiencia("bg-black hover:border-amarillo6 hover:bg-degradadohocercategoria  border-2 border-white"))
            case 9:
            return dispatch(setColorAspecto("bg-degradadoitemnueve")),
                        dispatch(setColorStyled("linear-gradient(to left,#f66207,#250be8,#250be8,#250be8)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemnueve")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemnueve")),

                        dispatch(setColorPerfil("bg-degradadoverdeperfil9")),
                        dispatch(setColorTextoSobromi("text-amarillo4")),
                        dispatch(setColorBoton("bg-black")),
                        dispatch(setColorBordeBoton("border-white")),
                        dispatch(setColorHoverBordeBoton("hover:border-amarillo6")),
                        dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash5")),
                        dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorTriangulo("border-l-azul8")),
                        dispatch(setTituloColorNoche("text-white")),
                        dispatch(setTituloColorDia("text-black")),
                        dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemnueve border-4 border-transparent text-white")),
                        dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadoitemnueve border-4 border-white text-white")),
                        dispatch(setColorBotonCategoriaProyectoHover("hover:bg-degradadohovercategoria9")),
                        dispatch(setColorCartaExperiencia("bg-degradadoitemnueve")),
                        dispatch(setColorBotonExperiencia("bg-black hover:border-amarillo6 hover:bg-degradadohocercategoria  border-2 border-white"))
            case 10:
            return dispatch(setColorAspecto("bg-degradadoitemdiez")),
                        dispatch(setColorStyled("linear-gradient(to left,#06b1e5,#023949)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemdiez")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemdiez")),

                        dispatch(setColorPerfil("bg-degradadoverdeperfil10")),
                        dispatch(setColorTextoSobromi("text-amarillo4")),
                        dispatch(setColorBoton("bg-black")),
                        dispatch(setColorBordeBoton("border-white")),
                        dispatch(setColorHoverBordeBoton("hover:border-celesteclaro")),
                        dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadorojo")),
                        dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorTriangulo("border-l-celeste10")),
                        dispatch(setTituloColorNoche("text-white")),
                        dispatch(setTituloColorDia("text-black")),
                        dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemdiez border-4 border-transparent text-white")),
                        dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadoitemdiez border-4 border-white text-white")),
                        dispatch(setColorBotonCategoriaProyectoHover("hover:bg-degradadohovercategoria10")),
                        dispatch(setColorCartaExperiencia("bg-degradadoitemdiez")),
                        dispatch(setColorBotonExperiencia("bg-black hover:border-celesteclaro hover:bg-degradadohocercategoria  border-2 border-white"))
            case 11:
            return dispatch(setColorAspecto("bg-degradadoitemonce")),
                        dispatch(setColorStyled("linear-gradient(to left,#240567,#64049c)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemonce")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemonce")),

                        dispatch(setColorPerfil("bg-degradadoverdeperfil10")),
                        dispatch(setColorTextoSobromi("text-amarillo4")),
                        dispatch(setColorBoton("bg-morado1")),
                        dispatch(setColorBordeBoton("border-white")),
                        dispatch(setColorHoverBordeBoton("hover:border-celesteclaro")),
                        dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash10")),
                        dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-white")),
                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorTriangulo("border-l-morado2")),
                        dispatch(setTituloColorNoche("text-white")),
                        dispatch(setTituloColorDia("text-black")),
                        dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemonce border-4 border-transparent text-white")),
                        dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadoitemonce border-4 border-white text-white")),
                        dispatch(setColorBotonCategoriaProyectoHover("hover:bg-degradadohovercategoria11")),
                        dispatch(setColorCartaExperiencia("bg-degradadoitemonce")),
                        dispatch(setColorBotonExperiencia("bg-transparent hover:border-celesteclaro hover:bg-degradadohocercategoria  border-2 border-white"))
            case 12:
            return dispatch(setColorAspecto("bg-degradadoitemdoce")),
                    dispatch(setColorStyled("linear-gradient(to left,#46cdcf,#3d84a7)")),
                    dispatch(setColorSeccionHabilidad("bg-degradadoitemdoce")),
                    dispatch(setColorSeccionContacto("bg-degradadoitemdoce")),

                    dispatch(setColorPerfil("bg-degradadoverdeperfil12")),
                        dispatch(setColorTextoSobromi("text-amarillo4")),
                        dispatch(setColorBoton("bg-transparent")),
                        dispatch(setColorBordeBoton("border-white")),
                        dispatch(setColorHoverBordeBoton("hover:border-celesteclaro")),
                        dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash12")),
                        dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white text-black")),
                        dispatch(setColorParrafoBienvenida("text-white")),
                        dispatch(setColorTriangulo("border-l-celeste12")),
                        dispatch(setTituloColorNoche("text-white")),
                        dispatch(setTituloColorDia("text-black")),
                        dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemdoce border-4 border-transparent text-white")),
                        dispatch(setColorBotonCategoriaProyectoActivo("bg-degradadoitemdoce border-4 border-white text-white")),
                        dispatch(setColorBotonCategoriaProyectoHover("hover:bg-degradadohovercategoria12")),
                        dispatch(setColorCartaExperiencia("bg-degradadoitemdoce")),
                        dispatch(setColorBotonExperiencia("bg-celeste13 hover:border-celesteclaro hover:bg-degradadohocercategoria  border-2 border-white"))


        }
      
    }
    let clase=`${stateItem.id && stateItem.state?"w-[100px] h-[100px] cursor-pointer grayscale-0":"w-[100px] h-[100px] cursor-pointer grayscale"} `

    useEffect(()=>{
        cambioColor()
    },[clase,valorItem,stateItem.id,dispatch])

 
    
    return(
        <div className="grid grid-cols-[repeat(2,auto)]  gap-[20px] p-[40px] sm:grid-cols-[auto,auto,auto] md:grid md:grid-cols-[auto,auto,auto,auto] xl:grid xl:grid-cols-[repeat(4,auto)] xl:gap-[50px] lg:grid lg:grid-cols-[auto,auto,auto,auto,auto]">
          
            {habilidades.map(habilidad=>{
                     
                        
                        return habilidad.state===false?(
                            <div className={"w-[100px] h-[100px] cursor-pointer grayscale"}>
                        <img loading="lazy" alt="img" key={habilidad.id} onClick={()=>{clickItem();stadoDelItem(habilidad.id,habilidad.state=true)}}  src={habilidad.item}/>
                        </div>
                        ):(
                            <div className={stateItem.id && habilidad.state===true ?"w-[100px] h-[100px] cursor-pointer grayscale-0":"w-[100px] h-[100px] cursor-pointer grayscale"}>
                            <img loading="lazy" alt="img" key={habilidad.id} onClick={()=>{clickItem();stadoDelItem(habilidad.id,habilidad.state=false)}}  src={habilidad.item}/>
                            </div>
                        ) 
                    
                   
                 
            }
              

            )}
         </div>
    )
}