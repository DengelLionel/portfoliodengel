import CartaDesarrollo from "../CartaDesarrollo"
import {datosProyectosBackendAndFrontend} from "../../../DatosUser/datosProyecto"
export default function FullStack({colorTitulo}){
    /* const colorTextoTitulo=`${colorTitulo} font-bold font-robotom text-md pl-2 lg:text-lg xl:text-xl 2xl:text-2xl` */
    return(
        
        <>
        
        
        <section className="duration-1000 transition-all grid grid-cols-[auto] gap-4 lg:grid lg:grid-cols-[auto,auto,auto] lg:gap-4 lg:w-full lg:mt-[50px] xl:flex xl:flex-wrap md:grid md:grid-cols-[auto,auto] md:gap-4">
        {datosProyectosBackendAndFrontend?.map(e=>{
            return(
                <CartaDesarrollo
                 key={e.id} 
                 title={e.title}
                 image={e.image}
                 item1={e.item1}
                 item2={e.item2}
                 item3={e.item3}
                 item4={e.item4}
                 github={e.github}
                 view={e.view}/>
            )
        })}
        
           
        </section>
       
         
        </>
            
        
    )
}