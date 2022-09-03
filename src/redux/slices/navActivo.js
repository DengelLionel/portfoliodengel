import { createSlice } from "@reduxjs/toolkit";
const initialState={
    valorCategoria:false,
}
const navActivo=createSlice({
    name:"valorNav",
    initialState,
    reducers:{
        setValorCategoriaNav(state,action){
            state.valorCategoria=action.payload;
        }
    }
})
export const valorCategory=(state)=>state.navActivo.valorCategoria;
export const {setValorCategoriaNav}=navActivo.actions;
export default navActivo.reducer;