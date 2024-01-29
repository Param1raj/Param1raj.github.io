import styled from "styled-components";

export const Intro = styled.div`
font-size: 25px;
color: white;
text-align: left;
// margin-top: 90px;
padding-left: 120px;
// border:1px solid red;
@media screen and (max-width:440px){
    padding-left: 25px;
    margin-top: 20px;
}
@media screen and (max-width:760px) and (min-width:440px){
    padding-left: 27px;
    margin-top: 20px;
}
@media screen and  (max-width:990px) and (min-width:760px){
    padding-left: 70px;
    margin-top: 20px;
}
`
export const Title = styled.div`
color: white;
font-weight: normal;
font-size: 55px;
text-align: left;
padding-left: 122px;
// border:1px solid red;   
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
// margin-top:20px;
padding: 10px;
border-radius: 70px;
font-size: 21px;
font-weight: bold;
border: 1px solid white;
&:hover{
    background:transparent;
    color:white;
    border:1px solid white;
    transition:1s ease;
}
`