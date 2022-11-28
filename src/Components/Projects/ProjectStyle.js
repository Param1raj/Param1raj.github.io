import styled from "styled-components"

export const Container = styled.div`
width:100%;
height:auto;
border:1px solid black;
background:black;

`

export const Heading = styled.div`
font-size: 39px;
margin-top: 59px;
color:white
`
export const Boxes= styled.div`
    width:100%;
    height:auto;
    margin-top:46px;
    display :flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding-bottom:50px
` 
export const BoxesItems = styled.div`
padding-top:40px;
background:black;
border: 1px solid white;
height: 100%;
width: 405px;
margin-right:13px;
transition: 2s background;
transition-delay:1s;
border-radius:20px;
padding-bottom:30px;
&:hover{
    background: linear-gradient(to right, #1aa1af, #2890aa, #3b7e9f, #496d8f, #505c7c);
    $div{
        color:black;
    }
}
margin-bottom:20px;
`

export const Button = styled.div`
display: flex;
justify-content: space-between;
padding-inline: 34px;
padding-top: 12px;
`
export const Buttons = styled.button`
width: 101px;
border-radius: 10px;
font-size: 16px;
font-weight: bold;
border:1px solid black;
&:hover{
    border:0px ;
    background:black;
    color:white;
}
`