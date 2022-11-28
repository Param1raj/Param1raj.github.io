import styled from "styled-components";

export const Nav = styled.div`
background:transparent;
height:100px;
display:flex;
justify-content: space-around;
align-items:center;
position: sticky;
top:0;
width:100%;
z-index: 10;
@media screen and (max-width: 960px) {
    transition: 0.8s all ease
}
`

export const NavNam = styled.div`
font-size: 45px;
color:white;
`

export const Options = styled.ul`
    display:flex;
    justify-content:space-evenly;
    width:100%;
    gap:60px;
    margin-top:13px;
`
export const OptionItem = styled.li`
    list-style:none;
    font-size:24px;
    &::after{
        content:" ";
        border-bottom:3px solid #ff8a65;
        width:20px;

    } 
`
export const Link = styled.a`
text-decoration: none;
color: black;
&:hover{
    color:white;
    text-decoration:none
}
`