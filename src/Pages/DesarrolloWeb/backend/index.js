import CartaDesarrollo from "../CartaDesarrollo"
export default function Backend({colorTitulo}){
    const colorTextoTitulo=`${colorTitulo} font-bold font-robotom text-md pl-2 lg:text-lg xl:text-xl 2xl:text-2xl`
    return(
        
        <>
        
        <div className="inline-flex justify-start items-center ">
       <img className="w-[55px] h-[55px]" alt="img" src="img/database.svg"/>
       <p className={colorTextoTitulo}>Projects Backend</p>
       </div>
        <div className="grid grid-cols-[auto] gap-4 lg:grid lg:grid-cols-[auto,auto,auto] lg:gap-4 lg:w-full lg:mt-[50px] md:grid md:grid-cols-[auto,auto] md:gap-4">
        <CartaDesarrollo/>
            <CartaDesarrollo/>
        </div>
       
         
        </>
            
        
    )
}