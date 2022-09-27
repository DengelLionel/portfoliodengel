import { useSelector } from "react-redux";
import { cambioTema } from "../../redux/slices/cambioTema";
export default function ButoonTema({handleButton}){
   let acceso=useSelector(cambioTema)

    return acceso?(
        <article className=" w-[30px] h-[30px] flex justify-center items-center bg-black rounded-full">
        <svg onClick={handleButton} className="cursor-pointer md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px] 2xl:w-[70px] 2xl:h-[70px]" width="24" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62L22.62 11.31L19.31 8ZM11.31 17.31C10.42 17.31 9.57 17.11 8.81 16.76C10.87 15.81 12.31 13.73 12.31 11.31C12.31 8.89 10.87 6.81 8.81 5.86C9.57 5.51 10.42 5.31 11.31 5.31C14.62 5.31 17.31 8 17.31 11.31C17.31 14.62 14.62 17.31 11.31 17.31Z" fill="yellow"/>
        </svg> 
        </article>
    ):(
        <article className=" w-[30px] h-[30px] flex justify-center items-center bg-black rounded-full">
        <svg onClick={handleButton} className="cursor-pointer md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px] 2xl:w-[70px] 2xl:h-[70px]" width="24" height="24" viewBox="0 0 23 23" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62L22.62 11.31L19.31 8ZM11.31 17.31C10.42 17.31 9.57 17.11 8.81 16.76C10.87 15.81 12.31 13.73 12.31 11.31C12.31 8.89 10.87 6.81 8.81 5.86C9.57 5.51 10.42 5.31 11.31 5.31C14.62 5.31 17.31 8 17.31 11.31C17.31 14.62 14.62 17.31 11.31 17.31Z" fill="white"/>
        </svg>
        </article>
    )
}