
export default function Header({children}){
    return(
        <header className="w-full flex justify-center items-center  bg-degradadoheaderdesarrolloweb fixed top-0 left-0 2xl:h-[90px] border-transparent z-[50]">
            {children}
        </header>
    )
}