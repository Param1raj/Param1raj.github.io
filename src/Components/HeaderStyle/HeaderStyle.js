import styled from "styled-components";

export const Intro = styled.div`
font-size: 23px;
color: white;
/* border: 1px solid; */
text-align: left;
margin-top: 90px;
padding-left: 130px;
@media screen and (max-width:440px){
    padding-left: 25px;
}
@media screen and (max-width:760px) and (min-width:440px){
    padding-left: 27px;
}
@media screen and  (max-width:990px) and (min-width:760px){
    padding-left: 70px;
}
`
export const Title = styled.div`
color: white;
font-weight: bold;
font-size: 67px;
text-align: left;
padding-left: 122px;
@media screen and (max-width:440px){
    padding-left: 22px;
    font-size:25px;
}
@media screen and (max-width:760px) and (min-width:440px){
    padding-left: 27px;
    font-size:30px;
}
@media screen and  (max-width:990px) and (min-width:760px){
    padding-left: 70px;
    font-size:50px;
}
`
export const Button = styled.button`
margin-top:20px;
padding: 10px;
border-radius: 70px;
font-size: 21px;
font-weight: bold;
border: 0px;
&:hover{
    background:transparent;
    color:white;
    border:1px solid white;
    transition:1s ease;
}
`