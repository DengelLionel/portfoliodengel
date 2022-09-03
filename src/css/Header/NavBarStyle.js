import styled from "styled-components";


export const NavBarStyle=styled.nav`
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:center;
vertical-align:text-bottom;
align-items:center;
margin-top:20px;
background:${props=>(props.fondoNav)};
position:fixed;
top:${props=>(props.valorScroll===0?"36vh":"10vh")};
z-index:30;
right:${props=>(props.openState)};
width:100%;
height:100vh;
transition:right 0.4s linear;

@media only screen and (min-width: 640px){
    flex-direction:row;
    position:initial;
    width:100%;
    height:auto;
    justify-content:end;
    background:${props=>(props.fondoNav)};
}
`;
/* (props=>(props.open===true?"0"?(props.valorCategoria===false?"-100%":"0"):"-100%":"-100%")) */