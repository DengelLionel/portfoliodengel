import { createSlice } from "@reduxjs/toolkit";
const initialState={
    colorExterior:false,
}
const ColorExteriorModals=createSlice({
    name:'colorExteriorM',
    initialState,
    reducers:{
        setColorExterior(state,action){
            state.colorExterior=action.payload;
        }
    }
})
export const ColorExteriorModal=(state)=>state.ColorExteriorModals.colorExterior;
export const {setColorExterior}=ColorExteriorModals.actions;
export default ColorExteriorModals.reducer;