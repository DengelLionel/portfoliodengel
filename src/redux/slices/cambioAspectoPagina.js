import { createSlice } from "@reduxjs/toolkit";
const initialState={
    color:"bg-degradadoceleste",
    colorstyled:"linear-gradient(to right,#5658C9,#2787DE,#02ADEE)",
    colorFondoHabilidad:"bg-degradadoazul",
    colorFondoContacto:"bg-degradadoceleste2",
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
        }
    }
})
export const stateColor=(state)=>state.cambioAspectoPagina.color;
export const stateColorStyled=(state)=>state.cambioAspectoPagina.colorstyled;
export const statecolorHabilidad=(state)=>state.cambioAspectoPagina.colorFondoHabilidad;
export const statecolorContacto=(state)=>state.cambioAspectoPagina.colorFondoContacto;
export const {setColorAspecto,setColorStyled,setColorSeccionHabilidad,setColorSeccionContacto}=cambioAspectoPagina.actions;
export default cambioAspectoPagina.reducer;