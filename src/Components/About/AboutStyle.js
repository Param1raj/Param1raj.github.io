import styled from "styled-components";

export const Action = styled.div`
background-image: linear-gradient(to right, #1aa1af, #2890aa, #3b7e9f, #496d8f, #505c7c);
max-width: 100%;
height:auto;
margin-top:100px;
padding-bottom:20px;
@media screen and (max-width:440px){
    margin-top:30px;
}
@media screen and (max-width:760px) and (min-width:440px){
    margin-top:40px;
}
@media screen and (max-width:980px) and (min-width:760px){
    margin-top:60px;
}
`


export const Heading=styled.div`
color: BLACK;
font-size: 39px;
padding-top: 68px;
@media screen and (max-width:440px){
    padding-top:20px;
    font-size:22px;
}
@media screen and (max-width:760px) and (min-width:440px){
    padding-top:35px;
    font-size:28px;
}
@media screen and (max-width:980px) and (min-width:760px){
    padding-top:45px;
    font-size:33px;
}
`

export const Profile = styled.div`
    max-width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:auto;
    margin-top:50px 
@media screen and (max-width:440px){
    margin-top:20px;
}
@media screen and (max-width:760px) and (min-width:440px){
    margin-top:0px;
}
@media screen and (max-width:980px) and (min-width:760px){
    margin-top:0px;
}
`
export const Image = styled.img`
    width:30%;
    height:30vw;
    border-radius:50%;
`
export const Details = styled.div`
    width:60%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

