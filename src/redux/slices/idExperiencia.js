import { createSlice } from "@reduxjs/toolkit";
const initialState={
    id:0,
}
const IdExperiencia=createSlice({
    name:'idExp',
    initialState,
    reducers:{
        setIdExperiencia(state,action){
            state.id=action.payload;
        }
    }
})
export const obtenerId=(state)=>state.IdExperiencia.id;
export const {setIdExperiencia}=IdExperiencia.actions;
export default IdExperiencia.reducer;
