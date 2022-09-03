export default function CartaDesarrollo(){
    return(
        <div className="w-[320px] h-[250px]  sm:w-[320px] sm:h-[250px] md:w-[320px] md:h-[250px] lg:w-[310px] lg:h-[300px] xl:w-[320px] xl:h-[350px] bg-black rounded-3xl 2xl:w-[400px] duration-1000 2xl:h-[350px]">
            <img  className="w-full h-[250px] lg:h-[300px] rounded-3xl xl:h-[350px]" alt="img" src="/img/laravel.jpg"/>
            <div className="bg-blancotransparente p-[12px] relative -top-[137px] rounded-br-3xl rounded-bl-3xl ">
                <span className="text-azul font-medium font-robotob text-md">HAMBURGUER MODAL MODAL MODAL </span>
                
                <div className="mb-[10px] grid grid-cols-[auto,auto,auto,auto] gap-1">
                <span className="text-white  flex justify-center items-center  font-robotor  bg-sky-600 p-[6px]">React</span>
                <span className="text-white flex justify-center items-center  font-robotor  bg-yellow-600 p-[6px]"> JS</span>
                <span className="text-white  flex justify-center items-center  font-robotor  bg-green-600 p-[6px]"> CSS</span>
                <span className="text-white  flex justify-center items-center  font-robotor  bg-indigo-600 p-[6px]">REDUX</span>
                </div>
                <div className="flex justify-center items-center">
                <div className="grid grid-cols-[auto,auto] gap-2">
                <button className="bg-blue-500 flex justify-center items-center w-[70px] rounded-md p-[4px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
                </button>
                <button className="text-white font-robotom bg-blue-500 flex justify-center items-center w-[70px] rounded-md p-[4px] ">
                    View
                </button>
                </div>
                </div>
            </div>
        </div>
    )
}