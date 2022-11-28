import styled from "styled-components";

export const Box = styled.div`
height:200px;
width:200px;
padding:10px;
display:flex;
flex-direction:column;
// border:1px solid white;
align-items:center;
justify-content:space-between;
border-radius:30px;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
@media screen and (max-width:300px){
    width:100px;
    height:100px;
    padding:5px;
}
@media screen and (max-width:400px)and (min-width:300px){
    width:100px;
    height:100px;
    padding:5px;
}
@media screen and (max-width:740px)and (min-width:400px){
    width:140px;
    height:140px;
}
@media screen and (max-width:740px){
    width:140px;
    height:140px;
}
@media screen and (max-width:1090px) and (min-width:740px){
    width:170px;
    height:170px;
}
`

export const Image = styled.img`
    height: 80%;
`

export const Boxes =styled.div`
    display:grid;
    gap:6vw;
    grid-template-columns: 248px 250px 262px 260px;
    grid-row-gap: 37px;
    justify-content: end;
    // border:1px solid black;
    height: auto;
    padding-bottom: 42px;
    @media screen and (max-width:300px) and (min-width:200px){
        grid-template-columns: 164px;
        grid-row-gap: 50px;
        justify-content:end;
        gap:1vw;
    }
    @media screen and (max-width:400px)and (min-width:300px){
        grid-template-columns: 164px 165px ;
        grid-row-gap: 50px;
        justify-content:end;
        gap:1vw;
    }
    @media screen and (max-width:740px)and (min-width:400px){
        grid-template-columns: 180px 170px ;
        grid-row-gap: 50px;
    }
    @media screen and (max-width:1090px) and (min-width:740px){
        grid-template-columns: 230px 230px 230px ;
        grid-row-gap: 50px;
        gap:6vw;
    }
    @media screen and (min-width:1090px){
        grid-template-columns: 250px 250px 250px 250px;
        grid-row-gap:50px;
        gap:6vw;
    }
`

export const Head = styled.h1`
font-size:7vw;

@media screen and (max-width:400px) and (min-width:300px){
    font-size:5vw;
}
@media screen and (max-width:600px) and (min-width:400px){
    font-size:5vw;
}
@media screen and (max-width:700px) and (min-width:600px){
    font-size:3vw;
}
@media screen and (max-width:900px) and (min-width:700px){
    font-size:3vw;
}
@media screen and (max-width:1426px) and (min-width:900px){
    font-size:3vw;
}
`
