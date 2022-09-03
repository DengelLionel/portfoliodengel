import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

import Header from "../Header"
export default function DesarrolloWeb(){

   
  
 const activeClassName="pb-[7px] pl-[2px] pr-[2px]  border-4 border-t-transparent border-l-transparent border-r-transparent border-b-red-400 font-robotom text-yellow-600 text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl"
    const desactiveClassName="pb-[7px] pl-[2px] pr-[2px] border-4 border-t-transparent border-l-transparent border-r-transparent border-b-transparent  font-robotom text-white tex-center text-md lg:text-lg xl:text-xl 2xl:text-2xl"
    return(
        <body className="flex justify-center items-center bg-degradadodesarrolloweb w-full h-full xl:bg-degradadodesarrollowebxl">
                <Header>
                <nav className="grid grid-cols-2 gap-7 p-[10px] text-md  font-robotom ">   
                <NavLink className={({isActive})=>isActive?activeClassName:desactiveClassName} to="frontend">FRONTEND</NavLink>
                <NavLink className={({isActive})=>isActive?activeClassName:desactiveClassName} to="backend">BACKEND</NavLink>
                </nav>
                </Header>
            <section className="">
            <Outlet/>
            </section>
       
        </body> 
    )
 
}