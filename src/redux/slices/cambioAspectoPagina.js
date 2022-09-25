import { createSlice } from "@reduxjs/toolkit";
const initialState={
    color:"bg-degradadoceleste",
    colorstyled:"linear-gradient(to right, #050533,#0e0f3c)",
    colorFondoHabilidad:"bg-degradadoazul",
    colorFondoContacto:"bg-degradadoceleste2",
    colorPerfil:"bg-degradadoperfil",
    colorTextoSobremi:"text-sobremi",
    colorBoton:"bg-degradadoceleste ",
    colorBordeBoton:"border-azul3",
    colorHoverBordeBoton:"hover:border-celesteclaro ",
    colorBeforeBoton:"hover:bg-degradadoceleste overflow-hidden relative  before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:skew-x-[50deg] before:origin-top-left before:duration-700 hover:before:left-[100%] before:bg-degradadorojo",
    colorLineaHoverNavItems:"xl:hover:bg-transparent xl:hover:border-t-transparent xl:hover:border-l-transparent xl:hover:border-r-transparent xl:hover:border-celesteclaro text-white",
    colorTriangulo:"border-l-triangulos",
    colorTituloNoche:"text-titulosmodonocturno",
    colorTituloDia:"text-titulos",
    colorBotonCategoriaProyectoActivo:"bg-degradadoceleste border-4 border-celesteclaro text-yellow-600",
    colorBotonCategoriaProyecto:"border-4 border-transparent bg-degradadoceleste text-white",
    colorBotonCategoriaProyectoHover:"hover:bg-yellow-700",
    colorCartaExperiencia:"bg-degradadoceleste ",
    colorBotonExperiencia:"bg-degradadoceleste border-2 border-azul3 hover:border-celesteclaro",
    colorParrafoBienvenida:"text-white",

}
const cambioAspectoPagina=createSlice({
    name:'aspectPagina',
    initialState,
    reducers:{
        setColorAspecto(state,action){
            state.color=action.payload;
        },
        setColorStyled(state,action){
            state.colorstyled=action.payload;
        },
        setColorSeccionHabilidad(state,action){
            state.colorFondoHabilidad=action.payload;
        },
        setColorSeccionContacto(state,action){
            state.colorFondoContacto=action.payload;
        },
        setColorPerfil(state,action){
            state.colorPerfil=action.payload;
        },
        setColorTextoSobromi(state,action){
            state.colorTextoSobremi=action.payload;
        },
        setColorBoton(state,action){
            state.colorBoton=action.payload;
        },
        setColorBordeBoton(state,action){
            state.colorBordeBoton=action.payload;
        },
        setColorHoverBordeBoton(state,action){
            state.colorHoverBordeBoton=action.payload;
        },
        setColorBeforeBoton(state,action){
            state.colorBeforeBoton=action.payload;
        },
        setColorLineaHoverNavItems(state,action){
            state.colorLineaHoverNavItems=action.payload;
        },
        setColorTriangulo(state,action){
            state.colorTriangulo=action.payload;
        },
        setTituloColorNoche(state,action){
            state.colorTituloNoche=action.payload;
        },
        setTituloColorDia(state,action){
            state.colorTituloDia=action.payload;
        },
        setColorBotonCategoriaProyectoActivo(state,action){
            state.colorBotonCategoriaProyectoActivo=action.payload;
        },
        setColorBotonCategoriaProyecto(state,action){
            state.colorBotonCategoriaProyecto=action.payload;
        },
        setColorBotonCategoriaProyectoHover(state,action){
            state.colorBotonCategoriaProyectoHover=action.payload;
        },
        setColorCartaExperiencia(state,action){
            state.colorCartaExperiencia=action.payload;
        },
        setColorBotonExperiencia(state,action){
            state.colorBotonExperiencia=action.payload;
        },
        setColorParrafoBienvenida(state,action){
            state.colorParrafoBienvenida=action.payload;
        }

    }
})
export const stateColor=(state)=>state.cambioAspectoPagina.color;
export const stateColorStyled=(state)=>state.cambioAspectoPagina.colorstyled;
export const statecolorHabilidad=(state)=>state.cambioAspectoPagina.colorFondoHabilidad;
export const statecolorContacto=(state)=>state.cambioAspectoPagina.colorFondoContacto;
export const stateColorPerfil=(state)=>state.cambioAspectoPagina.colorPerfil;
export const stateColorTextoSobremi=(state)=>state.cambioAspectoPagina.colorTextoSobremi;
export const stateColorBoton=(state)=>state.cambioAspectoPagina.colorBoton;
export const stateColorBordeBoton=(state)=>state.cambioAspectoPagina.colorBordeBoton;
export const stateColorHoverBordeBoton=(state)=>state.cambioAspectoPagina.colorHoverBordeBoton;
export const stateColorBeforeBoton=(state)=>state.cambioAspectoPagina.colorBeforeBoton;
export const stateColorLineaHoverNavItems=(state)=>state.cambioAspectoPagina.colorLineaHoverNavItems;
export const stateColorTriangulo=(state)=>state.cambioAspectoPagina.colorTriangulo;
export const stateColorTituloNoche=(state)=>state.cambioAspectoPagina.colorTituloNoche;
export const stateColorTituloDia=(state)=>state.cambioAspectoPagina.colorTituloDia;
export const stateColorBotonCategoriaProyectoActivo=(state)=>state.cambioAspectoPagina.colorBotonCategoriaProyectoActivo;
export const stateColorBotonCategoriaProyecto=(state)=>state.cambioAspectoPagina.colorBotonCategoriaProyecto;
export const stateColorBotonCategoriaProyectoHover=(state)=>state.cambioAspectoPagina.colorBotonCategoriaProyectoHover;
export const stateColorCartaExperiencia=(state)=>state.cambioAspectoPagina.colorCartaExperiencia;
export const stateColorBotonExperiencia=(state)=>state.cambioAspectoPagina.colorBotonExperiencia;
export const stateColorParrafoBienvenida=(state)=>state.cambioAspectoPagina.colorParrafoBienvenida;
export const {setColorAspecto,setColorStyled,setColorSeccionHabilidad,setColorSeccionContacto,setColorPerfil,setColorTextoSobromi,setColorBoton,setColorBordeBoton,setColorHoverBordeBoton,setColorBeforeBoton,setColorLineaHoverNavItems,setColorTriangulo,setTituloColorNoche,setTituloColorDia,setColorBotonCategoriaProyectoActivo,setColorBotonCategoriaProyecto,setColorBotonCategoriaProyectoHover,setColorCartaExperiencia,setColorBotonExperiencia,setColorParrafoBienvenida}=cambioAspectoPagina.actions;
export default cambioAspectoPagina.reducer;