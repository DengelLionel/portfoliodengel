import { useState,useEffect } from "react";
import { habilidades } from "./secciones/ItemsH";
import {stateGrayScale} from "../../redux/slices/cambioColorPagina";
import {setColorAspecto,setColorStyled,setColorSeccionHabilidad,setColorSeccionContacto,setColorPerfil,setColorTextoSobromi,setColorBoton,setColorBordeBoton,setColorHoverBordeBoton,setColorBeforeBoton,setColorLineaHoverNavItems,setColorTriangulo,setTituloColorNoche,setTituloColorDia,setColorBotonCategoriaProyectoActivo,setColorBotonCategoriaProyecto,setColorBotonCategoriaProyectoHover,setColorCartaExperiencia,setColorBotonExperiencia} from "../../redux/slices/cambioAspectoPagina";
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
               return dispatch(setColorAspecto("bg-degradadoitemuno")),
                        dispatch(setColorStyled("linear-gradient(to left,#AD8214,#AD8410)")),
                            dispatch(setColorSeccionHabilidad("bg-degradadoitemuno")),
                            dispatch(setColorSeccionContacto("bg-degradadoitemuno")),
                            dispatch(setColorPerfil("bg-white")),
                            dispatch(setColorTextoSobromi("text-black")),
                            dispatch(setColorBoton("bg-plomo1")),
                            dispatch(setColorBordeBoton("border-amarilloclaro")),
                            dispatch(setColorHoverBordeBoton("hover:border-white")),
                            dispatch(setColorBeforeBoton("hover:bg-black overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash1")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white")),
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

                        dispatch(setColorPerfil("bg-degradadoverdeperfil2")),
                            dispatch(setColorTextoSobromi("text-verdeclaro")),
                            dispatch(setColorBoton("bg-verdeoscuro")),
                            dispatch(setColorBordeBoton("border-verdeclaro")),
                            dispatch(setColorHoverBordeBoton("hover:border-verde1")),
                            dispatch(setColorBeforeBoton("hover:bg-verdeoscuro overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash2")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white")),
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

                        dispatch(setColorPerfil("bg-degradadoverdeperfil3")),
                            dispatch(setColorTextoSobromi("text-azulclaro1")),
                            dispatch(setColorBoton("bg-azul5")),
                            dispatch(setColorBordeBoton("border-azulclaro1")),
                            dispatch(setColorHoverBordeBoton("hover:border-azul6")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash2")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white")),
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

                        dispatch(setColorPerfil("bg-degradadoverdeperfil4")),
                            dispatch(setColorTextoSobromi("text-azulclaro1")),
                            dispatch(setColorBoton("bg-transparent")),
                            dispatch(setColorBordeBoton("border-azulclaro1")),
                            dispatch(setColorHoverBordeBoton("hover:border-celesteclaro2")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash2")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white")),
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

                        dispatch(setColorPerfil("bg-degradadoverdeperfil5")),
                            dispatch(setColorTextoSobromi("text-amarillo4")),
                            dispatch(setColorBoton("bg-transparent")),
                            dispatch(setColorBordeBoton("border-white")),
                            dispatch(setColorHoverBordeBoton("hover:border-naranjaoscuro1")),
                            dispatch(setColorBeforeBoton(" overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadobotonflash5")),
                            dispatch(setColorLineaHoverNavItems("xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-white")),
                            dispatch(setColorTriangulo("border-l-naranjaclaro")),
                            dispatch(setTituloColorNoche("text-white")),
                            dispatch(setTituloColorDia("text-white")),
                            dispatch(setColorBotonCategoriaProyecto("bg-degradadoitemcinco border-4 border-transparent text-white")),
                            dispatch(setColorBotonCategoriaProyectoActivo("bg-naranjaoscuro1 border-4 border-white text-white")),
                            dispatch(setColorBotonCategoriaProyectoHover("hover:bg-naranjaoscuro2")),
                            dispatch(setColorCartaExperiencia("bg-degradadoitemcinco")),
                            dispatch(setColorBotonExperiencia("bg-degradadoitemcinco hover:border-white  border-2 border-naranjaclaro"))
            case 6:
            return dispatch(setColorAspecto("bg-degradadoitemseis")),
                        dispatch(setColorStyled("linear-gradient(to left,#f31410,#3a10f3)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemseis")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemseis"))
            case 7:
            return dispatch(setColorAspecto("bg-degradadoitemsiete")),
                        dispatch(setColorStyled("linear-gradient(to left,#f50c0c,#561717)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemsiete")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemsiete"))
            case 8:
            return dispatch(setColorAspecto("bg-degradadoitemocho")),
                        dispatch(setColorStyled("linear-gradient(to left,#e3b40a,#a07f09)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemocho")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemocho"))
            case 9:
            return dispatch(setColorAspecto("bg-degradadoitemnueve")),
                        dispatch(setColorStyled("linear-gradient(to left,#250be8,#f66207)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemnueve")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemnueve"))
            case 10:
            return dispatch(setColorAspecto("bg-degradadoitemdiez")),
                        dispatch(setColorStyled("linear-gradient(to left,#06b1e5,#023949)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemdiez")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemdiez"))
            case 11:
            return dispatch(setColorAspecto("bg-degradadoitemonce")),
                        dispatch(setColorStyled("linear-gradient(to left,#240567,#64049c)")),
                        dispatch(setColorSeccionHabilidad("bg-degradadoitemonce")),
                        dispatch(setColorSeccionContacto("bg-degradadoitemonce"))
            case 12:
            return dispatch(setColorAspecto("bg-degradadoitemdoce")),
                    dispatch(setColorStyled("linear-gradient(to left,#0c8894,#051011)")),
                    dispatch(setColorSeccionHabilidad("bg-degradadoitemdoce")),
                    dispatch(setColorSeccionContacto("bg-degradadoitemdoce"))


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