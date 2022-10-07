import Triangle from "./secciones/Triangle";
import {statecolorContacto} from "../../redux/slices/cambioAspectoPagina"
import { useSelector } from "react-redux";
export default function Contact({colortexto,titleContact}){
    let subtitulo=`duration-1000 transition-all font-bold font-robotob text-center text-[2.25rem] xl:text-[3.75rem] z-[50] relative top-[175px] sm:relative sm:top-[175px] lg:top-[174px] xl:top-[180px] 2xl:text-[3.75rem] 2xl:top-[185px] ${colortexto}`;
    const colorstyled=useSelector(statecolorContacto)
    const FondoYclase=`${colorstyled}  p-[20px] h-[100px] w-full  xl:h-[300px] xl:mt-[150px] font-robotor  rounded-tr-[50px] rounded-tl-[50px] xl:rounded-tr-[150px] xl:rounded-tl-[150px]  sm:flex sm:justify-center sm:items-center sm:h-[150px] md:h-[280px] xl:flex xl:justify-center xl:items-center  lg:h-[300px] 2xl:h-[350px]  `
    return(
        <>
         <h2  id="contacto" className={subtitulo}>{titleContact}</h2>
        <div className=" w-full h-[100px] mt-[120px] mb-[80px] flex justify-center items-center  2xl:mb-[130px] ">
            <Triangle/>
            </div>
       
         <footer className={FondoYclase}>
          
    
         <div className="sm:grid sm:grid-cols-[auto] xl:grid xl:grid-cols-1 xl:h-[300px] 2xl:h-[350px] ">

        <img className=" w-[300px] h-[200px] hidden md:block md:h-[170px] md:relative md:top-[20px] xl:w-[400px] xl:h-[200px] xl:relative xl:top-[60px] xl:-left-[270px] 2xl:h-[250px] 2xl:relative 2xl:-left-[250px]" alt="img"  src="img/19362653 [Convertido].svg"/>
        
            
       
        
         
        <div class="   grid grid-cols-[repeat(5,auto)] gap-[35px] xl:relative xl:-top-[18vh] xl:gap-[150px] sm:relative sm:-top-[50px] sm:flex sm:justify-center  sm:items-center md:relative md:-top-[80px] 2xl:-top-[12vh] 2xl:gap-[180px] "> 
            <a href="https://www.facebook.com/lionel.riveracajincho/" target="_blank">
            <div className="will-change-transform rounded-full w-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000 ">
            <svg className="hover:text-blue-900 cursor-pointer xl:hover:text-blue-900 xl:w-[70px] xl:h-[70px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentcolor" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>
            </div>
            
            </a>
            <a href="https://www.instagram.com/dengel_lionel_/" target="_blank">
            <div className="will-change-transform rounded-full w-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000">
            <svg className="hover:text-pink-600 cursor-pointer xl:w-[70px] xl:h-[70px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentcolor" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle cx="11.994" cy="11.979" r="3.003"/></svg>
            </div>
            </a>
            <a  className="flex justify-center items-center w-[45px] h-[45px] xl:w-[70px] xl:h-[70px] rounded-full bg-white relative top-[5px]" href="mailto:dengelriveracajincho@gmail.com?Subject=Quiero%20contactarme%20contigo%20Dengel">
                        <svg className="fill-current hover:text-red-700 xl:hover:text-red-700 xl:w-[50px] xl:h-[50px] w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentcolor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
                       
                    </a>
            <a href="https://github.com/DengelLionel" target="_blank">
            <div className="will-change-transform rounded-full w-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000">
            <svg className="xl:hover:text-green-400 xl:w-[70px] xl:h-[70px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
            </div>
            </a>

            <a href="https://www.linkedin.com/in/driveracajincho/" target="_blank">
            <div className="will-change-transform rounded-full w-[35px] h-[35px] bg-white xl:w-[70px] xl:h-[70px] xl:hover:skew-x-12 xl:duration-1000 xl:hover:duration-1000 flex justify-center items-center">
         
            <svg className="fill-current xl:hover:text-blue-700 w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
            fill="currentcolor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </div>
            </a>
       </div>
       </div>
     
      
        </footer>
        </>
    )
}