import Triangulo from "./secciones/Triangulo";
import {statecolorContacto} from "../../redux/slices/cambioAspectoPagina"
import { useSelector } from "react-redux";
export default function Contacto({colortexto}){
    let subtitulo=`font-bold font-robotob text-center text-xl xl:text-2xl z-[50] relative top-[160px] sm:relative sm:top-[160px] xl:top-[165px] lg:top-[160px] xl:top-[150px] 2xl:text-3xl 2xl:top-[165px] ${colortexto}`;
    const colorstyled=useSelector(statecolorContacto)
    const FondoYclase=`${colorstyled}  p-[20px] h-[250px] w-full  xl:h-[480px] font-robotor  rounded-tr-[50px] rounded-tl-[50px] xl:rounded-tr-[150px] xl:rounded-tl-[150px]  sm:flex sm:justify-center sm:items-center sm:h-[320px] xl:flex xl:justify-center xl:items-center  lg:h-[400px] 2xl:h-[490px]  `
    return(
        <>
         <h2  id="contacto" className={subtitulo}>CONTACT</h2>
        <div className=" w-full h-[100px] mt-[120px] mb-[80px] flex justify-center items-center ">
            <Triangulo/>
            </div>
       
         <footer className={FondoYclase}>
          
    
         <section className=" grid grid-cols-[repeat(2,auto)]   sm:grid sm:grid-cols-[auto]">

        <img className=" w-[300px] h-[200px] hidden md:block xl:w-[700px] xl:h-[300px] xl:relative xl:top-[60px]" alt="img"  src="img/19362653 [Convertido].svg"/>
        
            <div className="relative top-[21vh] flet-[3vw] sm:relative xl:relative xl:top-[2vh] xl:left-[200px] sm:top-[10px] lg:relative lg:top-[5vh] 2xl:top-[1vh]">
                <span className="font-bold text-white text-md font-robotob p-4 bg-yellow-500 rounded-lg xl:text-xl 2xl:text-2xl">EMAIL:</span><br/>
                <span className="font-medium text-white text-md bg-indigo-600 relative top-[14px] p-4 font-robotor rounded-xl xl:text-xl 2xl:text-2xl">dengelriveracajincho@gmail.com</span>

            </div>
         <br/>
        

        <div class="  grid grid-cols-[repeat(3,auto)] gap-4 xl:relative xl:-top-[28vh] xl:gap-[150px] sm:relative sm:-top-[100px] sm:flex sm:justify-center  sm:items-center 2xl:-top-[25vh] 2xl:gap-[180px] "> 
            <a href="https://www.facebook.com/lionel.riveracajincho/" target="_blank">
            <div className=" rounded-full w-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000">
            <svg className="hover:text-blue-900 cursor-pointer xl:hover:text-blue-900 xl:w-[70px] xl:h-[70px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentcolor" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>
            </div>
            
            </a>
            <a href="https://www.instagram.com/dengel_lionel_/" target="_blank">
            <div className=" rounded-full w-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000">
            <svg className="hover:text-pink-600 cursor-pointer xl:w-[70px] xl:h-[70px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentcolor" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle cx="11.994" cy="11.979" r="3.003"/></svg>
            </div>
            </a>
            <a href="https://github.com/DengelLionel" target="_blank">
            <div className=" rounded-full w-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000">
            <svg className="xl:hover:text-green-400 xl:w-[70px] xl:h-[70px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
            </div>
            </a>
       </div>
       </section>
      
        </footer>
        </>
    )
}