import { useSelector } from "react-redux"
import {stateColorTriangulo} from "../../../redux/slices/cambioAspectoPagina"
export default function Triangulo(){
    const getColorTriangulo=useSelector(stateColorTriangulo)
    const colorTriangulo=`transform rotate-90  w-0 h-0 ${getColorTriangulo} border-l-[80px] border-solid border-t-[170px] border-t-transparent border-b-[170px]   border-b-transparent  xl:border-l-[120px] xl:border-t-[300px] xl:border-b-[300px]
    2xl:border-l-[120px] 2xl:border-t-[300px] 2xl:border-b-[300px]`
    return(
      
        <div className={colorTriangulo}>
        
        </div>
       
         
      
    )
}