import styled from "styled-components";

export const HeaderStyle=styled.header`

background:	${props=>(props.fondoheader)};
border-bottom-left-radius:${props=>(props.valorNav===true?"0px":"40px")};
border-bottom-right-radius:${props=>(props.valorNav===true?'0px':'40px')};
position:${ props=>(props.scrollVertical<=40?"relative" :"fixed")};
z-index:${props=>(props.scrollVertical<100?"70":"70")};
height:${props=>(props.scrollVertical===0?"13vh" :"15vh")};
width:100%;
bottom:${props=>(props.scrollVertical===0?"23.5vh" :"87vh")};
box-shadow:1px 10px 10px 1px  rgba(255,255,255,.2);
transition-property:all;
transition-duration:1000ms;
@media only screen and (min-width: 640px){
    border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
position:relative;
height:15vh;
bottom:16vh;
padding:8px;
z-index:90;
box-shadow:none;
}
@media only screen and (min-width: 768px){
height:10vh;
position:relative;
bottom:11vh;
z-index:90;
}
@media only screen and (min-width: 1024px){
    position:relative;
    bottom:14vh;
}
@media only screen and (min-width: 1280px){
position:relative;
bottom:29.5vh;
    
}


@media only screen and (min-width: 1536px){
    position:relative;
    bottom:15.5vh;
}
`;