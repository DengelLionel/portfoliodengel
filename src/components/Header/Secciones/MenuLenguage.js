
export default function MenuLenguage({ActiveEnglish,ActiveEspanish}){
    return(
        <article className="hidden md:block absolute top-[0] md:absolute md:-top-[65%] left-[2%]">
           
            <div className=" transform rotate-[270deg]  border-l-white border-solid border-l-[20px] border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent"></div>
            <article className="bg-white w-[100px] h-[80px] font-bold text-blue-700 gap-[20px]">
                    <button className="p-2 hover:text-red-700" onClick={ActiveEspanish}>ESPAÑOL</button>
                    <button className="p-2 hover:text-red-700" onClick={ActiveEnglish}>ENGLISH</button>
            </article>
            
        </article>
    )
}