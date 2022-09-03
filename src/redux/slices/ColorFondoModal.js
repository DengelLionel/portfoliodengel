import { createSlice } from "@reduxjs/toolkit";

const initialState={
    colorfondo:"bg-yellow-700",
}
const ColorFondoModal=createSlice({
    name:"colorFondoM",
    initialState,
    reducers:{
        setColorFondoModal(state,action){
            state.colorfondo=action.payload;
        }
    }
})
export const colorFondoState=(state)=>state.ColorFondoModal.colorfondo;
export const {setColorFondoModal}=ColorFondoModal.actions;
export default ColorFondoModal.reducer;