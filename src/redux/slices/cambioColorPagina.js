import { createSlice } from "@reduxjs/toolkit";
const initialState={
    grayscale:false,
}
const cambioColorPagina=createSlice({
    name:'graysc',
    initialState,
    reducers:{
        setGrayScale(state,action){
            state.grayscale=action.payload;
        }    
    }
})
export const stateGrayScale=(state)=>state.cambioColorPagina.grayscale;
export const {setGrayScale}=cambioColorPagina.actions;
export default cambioColorPagina.reducer;