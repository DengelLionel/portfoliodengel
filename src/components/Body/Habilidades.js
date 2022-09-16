import Triangulo from "./secciones/Triangulo";
import ItemsHabilidades from "./ItemsHabilidad";
import {stateGrayScale,setGrayScale} from "../../redux/slices/cambioColorPagina";
import { useSelector,useDispatch } from "react-redux";
import {statecolorHabilidad} from "../../redux/slices/cambioAspectoPagina";
export default function Habilidades({colortexto}){
    let subtitulo=`relative top-[127px] z-[50] font-bold font-robotob text-center text-[2.25rem] xl:text-[3.75rem] mb-[30px] xl:relative xl:top-[140px] lg:relative lg:top-[128px] 2xl:text-[3.75rem] 2xl:top-[135px] ${colortexto}`;
   const dispatch=useDispatch()
    const valorClickItem=useSelector(stateGrayScale);
    const colorStyled=useSelector(statecolorHabilidad)
    const clickItem=()=>{
        dispatch(setGrayScale(!valorClickItem));
    }
    const fondoHabilidadYclase=`${colorStyled}   p-[20px]  xl:h-[auto] xl:p-[40px] xl:mt-[130px] flex flex-col justify-center items-center  xl:flex xl:flex-row xl:justify-center xl:items-center rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[50px] xl:rounded-tl-[140px] xl:rounded-br-[140px] duration-1000`
    return(
        
        <div className=" h-auto mt-[100px] sm:h-auto sm:mt-[240px] md:h-auto lg:h-auto xl:h-[145vh] xl:mt-[100px] 2xl:h-auto  ">
             <h2 id="habilidad" className={subtitulo}>SKILLS</h2>
        <div className=" w-full h-[100px] mt-[70px] mb-[70px] flex justify-center items-center ">
           
           
            <Triangulo/>
            </div>
         
            
     <div className={fondoHabilidadYclase}>
     <p className="text-white font-robotob text-xl font-bold xl:text-3xl">CHOOSE YOUR FAVORITE SKILL</p>
         <ItemsHabilidades valorItem={valorClickItem} clickItem={clickItem}/>
     </div>
     </div>
        
    )
}