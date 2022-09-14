import styled from "styled-components";
export const HeaderStyle=styled.header`

background:	${props=>(props.fondoheader)};
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
position:${ props=>(props.scrollVertical<=40?"relative" :"fixed")};
z-index:${props=>(props.scrollVertical<100?"70":"70")};
height:${props=>(props.scrollVertical===0?"13vh" :"15vh")};
width:100%;
bottom:${props=>(props.scrollVertical===0?"23vh" :"87vh")};
transition:position bottom 5s;
@media only screen and (min-width: 640px){
    border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
position:relative;
bottom:14vh;
}
@media only screen and (min-width: 768px){
height:10vh;
}
@media only screen and (min-width: 1024px){
    position:relative;
    bottom:24vh;
}
@media only screen and (min-width: 1280px){
position:relative;
bottom:28vh;
    
}


@media only screen and (min-width: 1536px){
    position:relative;
    bottom:28vh;
}
`;