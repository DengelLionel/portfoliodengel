import '../../css/Header/Presentacion_video.css'
import "../../css/Body/AnimacionLetras.css";
import Encabezado from "../Header/Header";

import { useEffect } from 'react';
export default function Presentacionvideo(){
  useEffect(()=>{

  },[])
   
    return(
        <header className='h-[200px] sm:h-[150px] lg:h-[190px] xl:h-[200px] xl:w-full 2xl:h-[200px]'>
        
            <img loading='lazy' className='w-full  h-[200px] sm:hidden md:block xl:h-[200px] md:h-[150px] lg:h-[190px] 2xl:block 2xl:h-[200px]' src="https://res.cloudinary.com/dengeltec/image/upload/v1663277827/samples/den/fondo_klxj0f.png" />

                <div className="w-full h-[140px] sm:w-full sm:h-[75px] xl:w-full xl:h-[195px]  lg:w-full lg:h-[142px] relative -top-40 xl:relative xl:-top-[250px] lg:relative lg:-top-[210px] 2xl:relative 2xl:-top-[260px]">
                <div className="flex justify-center items-center">
                <div className="grid grid-cols-[auto]">
                <div className="flex justify-center items-center">
                  <img loading='lazy' className="hidden lg:hidden xl:block rounded-full  w-20 h-20 items-center sm:block sm:relative sm:top-[70px] md:top-[55px] xl:w-[120px] xl:h-[120px]" src="img/logoden.png" alt="img"/>
                  <div className=" w-[90px] h-[90px] sm:hidden lg:w-[300px] lg:h-[300px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] rounded-full bg-degradadoperfil flex justify-center items-center relative -top-[30px] sm:relative sm:-top-0">
                    <img loading='lazy' alt='img' className=" w-[80px] h-[80px] lg:w-[290px] lg:h-[290px] xl:w-[300px] xl:h-[300px] 2xl:w-[330px] 2xl:h-[330px] rounded-full" src="img/perfilbajado.jpg" />
                    </div>
                </div>
                <section className="relative -top-[20px] sm:-top-0 lg:top-[90px] xl:top-[60px]">
            <h3 
            className="font-bold sm:hidden md:hidden lg:block xl:block text-center font-robotob tracking-wide text-white bg-degradadonegro w-full h-[30px] lg:text-xl xl:text-2xl 2xl:text-2xl"
            >Dengel Lionel Rivera Cajincho</h3>
              <div className="sm:hidden md:hidden lg:block xl:block flex justify-center items-center">
                <div className="destello"></div>
              </div>
              <div  className="flex justify-center items-center xl:flex xl:justify-center xl:items-center lg:flex lg:justify-center lg:items-center md:hidden sm:hidden ">
            <h4  className="font-bold text-center font-robotob tracking-wide text-yellow-500 bg-degradadonegro w-full h-[30px] lg:text-xl xl:text-2xl 2xl:text-2xl">Developer FullStack</h4>
            </div>
            </section>
            </div>
            </div>
              </div>
              <Encabezado/>
        </header>
    )
}
