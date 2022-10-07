import ImagePresentation from "../components/Header/ImagePresentation";
import Body from "../components/Body/index";
import { contentMain } from "../DatosUser/Content";
import Contact from "../components/Body/Contact";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {cambioTema} from "../redux/slices/cambioTema";
import {setOpenMenuLenguage,stateOpenMenuLenguage,stateColorTituloNoche,stateColorTituloDia,setActiveEspanish,setActiveEnglish,stateActiveEspanish,stateActiveEnglish} from "../redux/slices/cambioAspectoPagina";
import { useCallback } from "react";

const PortafolioHome=()=>{
    const cambioTemas=useSelector(cambioTema);
    const getColorTituloNoche=useSelector(stateColorTituloNoche)
    const getColorTituloDia=useSelector(stateColorTituloDia)
    const colorbodynegro="w-full lg:z-[70] bg-negro cursor-default";
    const colorbodyblanco="w-full  bg-white cursor-default";
    const colorblanco=getColorTituloNoche;
    const colorsecund=getColorTituloDia;
    const colorTitulo=`${cambioTemas?colorsecund:colorblanco}`
    const cambiotema=`${cambioTemas?colorbodyblanco:colorbodynegro}`
    const openMenuLenguage=useSelector(stateOpenMenuLenguage)
    const dispatch=useDispatch();
   const activeEspanish=useSelector(stateActiveEspanish)
        console.log("openMenuLenguage ",openMenuLenguage)
    const closeMenuLenguage=useCallback(()=>{
        dispatch(setOpenMenuLenguage(!openMenuLenguage))
    },[openMenuLenguage])
    useEffect(()=>{

    },[])

    return activeEspanish===true?contentMain?.map(contents=>(
        <main onClick={closeMenuLenguage}
         className={cambiotema}>
        <ImagePresentation titleMain={contents.espanish.titleMain}/>
        <Body 
        colorTitulo={colorTitulo}
        aboutMe={contents.espanish.aboutMe}
        helloWork={contents.espanish.helloWork}
        paragraph1={contents.espanish.paragraph1}
        paragraph2={contents.espanish.paragraph2}
        paragraph3={contents.espanish.paragraph3}
        buttonDownload={contents.espanish.buttonDownload}
        buttonProject={contents.espanish.buttonProject}
        buttonContact={contents.espanish.buttonContact}
        titleProject={contents.espanish.titleProject}
        categoryWebdev={contents.espanish.categoryWebdev}
        categoryMobiledev={contents.espanish.categoryMobiledev}
        titleSkills={contents.espanish.titleSkills}
        chooseSkills={contents.espanish.chooseSkills}
        titleExperience={contents.espanish.titleExperience}
       
        />
        <Contact  titleContact={contents.espanish.titleContact} colortexto={colorTitulo}/> 
        </main>
        
    )) :contentMain?.map(contents=>(
        <main 
        onClick={closeMenuLenguage}
         className={cambiotema}
        
         >
        <ImagePresentation titleMain={contents.english.titleMain}/>
        <Body 
        colorTitulo={colorTitulo}
        aboutMe={contents.english.aboutMe}
        helloWork={contents.english.helloWork}
        paragraph1={contents.english.paragraph1}
        paragraph2={contents.english.paragraph2}
        paragraph3={contents.english.paragraph3}
        buttonDownload={contents.english.buttonDownload}
        buttonProject={contents.english.buttonProject}
        buttonContact={contents.english.buttonContact}
        titleProject={contents.english.titleProject}
        categoryWebdev={contents.english.categoryWebdev}
        categoryMobiledev={contents.english.categoryMobiledev}
        titleSkills={contents.english.titleSkills}
        chooseSkills={contents.english.chooseSkills}
        titleExperience={contents.english.titleExperience}
       
        />
        <Contact  titleContact={contents.english.titleContact} colortexto={colorTitulo}/> 
        </main>
    ))
}
export default PortafolioHome