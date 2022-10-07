import CartaDesarrollo from "../../components/Body/Cartas/CartaDesarrollo"
import { datosProyectosMobil } from "../../DatosUser/datosProyecto"
import {stateActiveEspanish} from "../../redux/slices/cambioAspectoPagina";
import { useSelector } from "react-redux";
export default function DesarrolloMovil(){
    const activeEspanish=useSelector(stateActiveEspanish)
    return(
        
           <div className="grid grid-cols-[auto] gap-4 lg:grid lg:grid-cols-[auto,auto,auto]  lg:gap-4 md:grid md:grid-cols-[auto,auto] md:gap-4 sm:grid sm:grid-cols-[auto] sm:gap-4">
            {datosProyectosMobil?.map(e=>{
                return(
                    <CartaDesarrollo
                     key={e.id}
                     title={activeEspanish===true?e.espanish.title:e.english.title}
                     image={e.image}
                     item1={e.item1}
                     item2={e.item2}
                     github={e.github}
                     view={e.view}
                    />
                )
            })}
           
           </div>
            
            
        
    )
}