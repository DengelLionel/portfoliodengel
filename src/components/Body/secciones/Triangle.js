import { useSelector } from "react-redux"
import {stateColorTriangulo} from "../../../redux/slices/cambioAspectoPagina"
export default function Triangle(){
    const getColorTriangulo=useSelector(stateColorTriangulo)
   
    return(
      
        <div className={`transform rotate-90 transition-all duration-1000 w-0 h-0 ${getColorTriangulo} border-l-[80px] border-solid border-t-[170px] border-t-transparent border-b-[170px]   border-b-transparent  xl:border-l-[120px] xl:border-t-[300px] xl:border-b-[300px]
        2xl:border-l-[120px] 2xl:border-t-[300px] 2xl:border-b-[300px]`}>
        
        </div>
       
         
      
    )
}