import Triangulo from "./secciones/Triangulo";
import ItemsHabilidades from "./ItemsHabilidad";
import {stateGrayScale,setGrayScale} from "../../redux/slices/cambioColorPagina";
import { useSelector,useDispatch } from "react-redux";
import {statecolorHabilidad} from "../../redux/slices/cambioAspectoPagina";
export default function Habilidades({colortexto}){
    let subtitulo=`font-bold font-robotob text-center text-xl xl:text-2xl mb-[30px] xl:relative xl:-top-[26.5vh] lg:relative lg:-top-[19vh] 2xl:text-3xl 2xl:-top-[18.5vh] ${colortexto}`;
   const dispatch=useDispatch()
    const valorClickItem=useSelector(stateGrayScale);
    const colorStyled=useSelector(statecolorHabilidad)
    const clickItem=()=>{
        dispatch(setGrayScale(!valorClickItem));
    }
    const fondoHabilidadYclase=`${colorStyled}   p-[20px]  xl:h-[auto] xl:p-[40px] flex flex-col justify-center items-center  xl:flex xl:flex-row xl:justify-center xl:items-center rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[50px] xl:rounded-tl-[140px] xl:rounded-br-[140px] duration-1000`
    return(
        
        <div className=" h-[210vh] sm:h-[160vh] lg:h-[102vh] xl:h-[150vh] 2xl:h-[90vh]  ">
        <div className=" w-full flex justify-center items-center ">
            <Triangulo>
            <h2 id="habilidad" className={subtitulo}>SKILLS</h2>
            </Triangulo>
            </div>
         

     <div className={fondoHabilidadYclase}>
         <ItemsHabilidades valorItem={valorClickItem} clickItem={clickItem}/>
     </div>
     </div>
        
    )
}