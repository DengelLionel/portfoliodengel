import CartaDesarrollo from "../../../components/Body/Cartas/CartaDesarrollo"
import {datosProyectosBackendAndFrontend} from "../../../DatosUser/datosProyecto"
import {stateActiveEspanish} from "../../../redux/slices/cambioAspectoPagina";
import { useSelector } from "react-redux";
export default function FullStack({colorTitulo}){
    const activeEspanish=useSelector(stateActiveEspanish)
    /* const colorTextoTitulo=`${colorTitulo} font-bold font-robotom text-md pl-2 lg:text-lg xl:text-xl 2xl:text-2xl` */
    return(
        
        <>
        
        
        <section className="duration-1000 transition-all grid grid-cols-[auto] gap-4 lg:grid lg:grid-cols-[auto,auto,auto] lg:gap-4 lg:w-full lg:mt-[50px] xl:flex xl:flex-wrap md:grid md:grid-cols-[auto,auto] md:gap-4">
        {datosProyectosBackendAndFrontend?.map(atributo=>{
           
            return(
                <CartaDesarrollo
                 key={atributo.id} 
                 title={activeEspanish===true?atributo.espanish.title:atributo.english.title}
                 image={atributo.image}
                 item1={atributo.item1}
                 item2={atributo.item2}
                 item3={atributo.item3}
                 item4={atributo.item4}
                 github={atributo.github}
                 view={atributo.view}/>
            )
        })}
        
           
        </section>
       
         
        </>
            
        
    )
}