import Backend from "./backend"
import Frontend from "./frontend"
export default function ComponentesBackAndFrond({colorTitulo}){
    return(
        <>
        <Backend colorTitulo={colorTitulo}/>
        <Frontend colorTitulo={colorTitulo}/>
        </>
        
    )
}
