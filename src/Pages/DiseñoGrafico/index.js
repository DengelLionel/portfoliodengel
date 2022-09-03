import CartaDesarrollo from "../DesarrolloWeb/CartaDesarrollo"
export default function DisenoGrafico(){
    return(
        
           <div className="grid grid-cols-[auto] gap-4 md:grid md:grid-cols-[auto,auto] md:gap-4 lg:grid lg:grid-cols-[auto,auto,auto] ">
            <CartaDesarrollo/>
            
            </div>
        
    )
}