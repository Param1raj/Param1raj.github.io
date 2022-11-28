import styled from "styled-components";

export const Box = styled.div`
border:1px solid black;
width:100%;
background-color:black;
height:auto;
padding-bottom:20px;
`
export const Headline = styled.div`
color: white;
font-size: 39px;
margin-top: 65px;
text-align: center;
// border:1px solid white;
@media screen and (max-width:440px){
    margin-top: 0px;
    padding-top:10px;
    font-size:22px;
}
@media screen and (max-width:760px) and (min-width:440px){
    margin-top: 15px;
    padding-top:20px;
    font-size:28px;
}
@media screen and (max-width:980px) and (min-width:760px){
    margin-top: 25px;
    padding-top:30px;
    font-size:34px;
}
`

export const Boxes= styled.div`
    width:100%;
    height:auto;
    margin-top:46px;
    display :flex;
    padding-left:52px
    align-items:center;
    justify-content: center;
    flex-wrap:wrap;
` 
export const BoxesItems = styled.div`
background:black;
border: 1px solid white;
height: 100%;
width: 405px;
margin-right:13px;
transition: 2s background;
transition-delay:1s;
border-radius:20px;
margin-bottom:20px;
&:hover{
    background: linear-gradient(to right, #1aa1af, #2890aa, #3b7e9f, #496d8f, #505c7c);
    $div{
        color:black;
    }
}
@media screen and (max-width:440px){
    width:180px;
}
@media screen and (max-width:760px) and (min-width:440px){
    width:220px;
}
@media screen and (max-width:980px) and (min-width:760px){
   width:260px;
}
@media screen and (max-width:1280px) and (min-width:980px){
    width:300px;
 }
`
export const Image = styled.img`
    height:150px;
    color:black;
    @media screen and (max-width:440px){
        height:50px;
    }
    @media screen and (max-width:760px) and (min-width:440px){
        height:80px;
    }
    @media screen and (max-width:980px) and (min-width:760px){
       height:100px;
    }
`

export const Text = styled.div`
 fontSize: 50px;
 color: white 
`