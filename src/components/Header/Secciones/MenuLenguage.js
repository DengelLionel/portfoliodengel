
export default function MenuLenguage({ActiveEnglish,ActiveEspanish}){
    return(
        <article className="hidden md:block absolute top-[0] left-[2%]">
           
            <div className=" transform rotate-[270deg]  border-l-white border-solid border-l-[20px] border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent"></div>
            <article className="bg-white w-[100px] h-[80px] font-bold text-blue-700 gap-[20px]">
                    <button onClick={ActiveEspanish}>ESPAÑOL</button>
                    <button onClick={ActiveEnglish}>ENGLISH</button>
            </article>
            
        </article>
    )
}