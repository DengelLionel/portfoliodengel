import CartaDesarrollo from "../CartaDesarrollo"
import { datosProyectosFrontend } from "../../../DatosUser/datosProyecto"
export default function Frontend({colorTitulo}){
    const colorTextoTitulo=`${colorTitulo} font-bold font-robotom text-md pl-2 lg:text-lg xl:text-xl 2xl:text-2xl`
    return(
       /*  <div className="grid grid-cols-[auto] mt-[80px] mb-[80px] gap-4 sm:grid sm:grid-cols-[repeat(1,auto)] sm:gap-[20px] md:grid md:grid-cols-[repeat(2,auto)] lg:grid lg:grid-cols-[repeat(3,auto)]"> */
       <>
       <div className="inline-flex justify-start items-center">
       <img alt="img" src="img/frontend.png"/>
       <p className={colorTextoTitulo}>Projects Frontend</p>
       </div>
       <section className="grid grid-cols-[auto] gap-4  lg:grid lg:grid-cols-[auto,auto,auto] lg:gap-4 md:grid md:grid-cols-[auto,auto] md:gap-4">
       {datosProyectosFrontend?.map(e=>{
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