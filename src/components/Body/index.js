import SectionWelcome from "./SectionWelcome";
import Projects from "./Projects";
import Kills from "./Kills";
import Experience from "./Experience";
import { useEffect } from "react";

export default function Body({colorTitulo,aboutMe,helloWork,paragraph1,paragraph2,paragraph3,buttonDownload,buttonProject,buttonContact,titleProject,categoryWebdev,categoryMobiledev,titleSkills,chooseSkills,titleExperience}){
  
useEffect(()=>{

},[])
    
    return ( 
            <>

         <SectionWelcome 
         aboutMe={aboutMe}
         helloWork={helloWork}
         paragraph1={paragraph1}
         paragraph2={paragraph2}
         paragraph3={paragraph3}
         buttonContact={buttonContact}
         buttonDownload={buttonDownload}
         buttonProject={buttonProject}
         
         />
         <Projects 
         titleProject={titleProject}
         categoryMobiledev={categoryMobiledev}
         categoryWebdev={categoryWebdev}
           colortexto={colorTitulo}/>
         
         <Kills titleSkills={titleSkills} chooseSkills={chooseSkills} colortexto={colorTitulo}/>
        
         <Experience  titleExperience={titleExperience} colortexto={colorTitulo}/>

            </>

    )
}