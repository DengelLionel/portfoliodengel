import { combineReducers } from "redux";
import cambioTemaSlice from "../slices/cambioTema";
import scrollYValor from "../slices/scrollYValor";
import navActivo from "../slices/navActivo";
import ColorExteriorModals from "../slices/ColorExteriorModals";
import IdExperiencia from "../slices/idExperiencia";
import ColorFondoModal from "../slices/ColorFondoModal";
import cambioColorPagina from "../slices/cambioColorPagina";
import cambioAspectoPagina from "../slices/cambioAspectoPagina";
export default combineReducers({
    cambioTemaSlice,
    scrollYValor,
    navActivo,
    ColorExteriorModals,
    IdExperiencia,
    ColorFondoModal,
    cambioColorPagina,
    cambioAspectoPagina,
})