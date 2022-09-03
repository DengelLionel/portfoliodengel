import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cambioTema:false,
}
const cambioTemaSlice=createSlice({
    name:"cambioTema",
    initialState,
    reducers:{
        ObtenerCambioEstadoTema(state,action){
            state.cambioTema=action.payload;
        },
      
    }
})

export const cambioTema=(state)=>state.cambioTemaSlice.cambioTema;
export const {ObtenerCambioEstadoTema}=cambioTemaSlice.actions;
export default cambioTemaSlice.reducer;