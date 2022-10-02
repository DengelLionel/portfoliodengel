import {useEffect } from "react";
import { items } from "../../../DatosUser/items";
import { useChangeColorUnderItems } from "../../../hooks/useChangeColorUnderItems";

export default function ItemsKills({clickItem}){
   
    const {stateItem,stadoDelItem,cambioColor}=useChangeColorUnderItems()
  
    useEffect(()=>{
        
        cambioColor()
    },[stateItem.id])

    return(
        <div className="grid grid-cols-[repeat(2,auto)]  gap-[20px] p-[40px] sm:grid-cols-[auto,auto,auto] md:grid md:grid-cols-[auto,auto,auto,auto] xl:grid xl:grid-cols-[repeat(4,auto)] xl:gap-[50px] lg:grid lg:grid-cols-[auto,auto,auto,auto,auto]">
          
            {items.map(habilidad=>{
                     
                        
                        return habilidad.state===false?(
                            <div className={"w-[100px] h-[100px] cursor-pointer grayscale"}>
                        <img loading="lazy" alt="img" key={habilidad.id} onClick={()=>{clickItem();stadoDelItem(habilidad.id,habilidad.state=true)}}  src={habilidad.item}/>
                        </div>
                        ):(
                            <div className={stateItem.id && habilidad.state===true ?"w-[100px] h-[100px] cursor-pointer grayscale-0":"w-[100px] h-[100px] cursor-pointer grayscale"}>
                            <img loading="lazy" alt="img" key={habilidad.id} onClick={()=>{clickItem();stadoDelItem(habilidad.id,habilidad.state=false)}}  src={habilidad.item}/>
                            </div>
                        ) 
                    
                   
                 
            }
              

            )}
         </div>
    )
}