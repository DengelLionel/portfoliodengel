import { createSlice } from "@reduxjs/toolkit";

const initialState={
    scrollValorY:0,
}
const scrollYValor=createSlice({
    name:'scrollY',
    initialState,
    reducers:{
        setValorScrollY(state,action){
            state.scrollValorY=action.payload;
        }
    }
})
export const valorScrollY=(state)=>state.scrollYValor.scrollValorY;
export const {setValorScrollY}=scrollYValor.actions;
export default scrollYValor.reducer;