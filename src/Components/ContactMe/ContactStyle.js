import styled from "styled-components";


export const Container = styled.div`
width:100%;
height:500px;
border:1px solid white;
background:white;
`

export const Heading = styled.div`
font-size: 39px;
margin-top: 59px;
`
export const Box = styled.div`
 width:80%;
 margin:auto;
 text-align:left;
 display:grid;
 grid-template-columns:40% 60%;
 gap:10px;
 @media all and (min-width:800px) and (max-width:1000px){
    width:95%;
    grid-template-columns:30% 70%;
    gap:10px;
 }
 @media all and (min-width:200px) and (max-width:800px){
    width:95%;
    grid-template-columns:20% 80%;
    gap:10px;
 }
`


export const Image = styled.img`

`
