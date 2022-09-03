import CartaDesarrollo from "../DesarrolloWeb/CartaDesarrollo"
export default function DesarrolloMovil(){
    return(
        
           <div className="grid grid-cols-[auto] gap-4 lg:grid lg:grid-cols-[auto,auto,auto] lg:gap-4 md:grid md:grid-cols-[auto,auto] md:gap-4 sm:grid sm:grid-cols-[auto] sm:gap-4">
           <CartaDesarrollo/>
            <CartaDesarrollo/>
            <CartaDesarrollo/>
            <CartaDesarrollo/>
           </div>
            
            
        
    )
}