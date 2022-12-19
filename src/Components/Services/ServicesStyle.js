import styled from "styled-components";

export const Box = styled.div`
height:100px;
width:100px;
padding:10px;
margin:auto;
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
    // padding:5px;
    margin:auto;
}
@media screen and (max-width:400px)and (min-width:300px){
    width:100px;
    height:100px;
    // padding:5px;
    margin:auto;
}
@media screen and (max-width:740px)and (min-width:400px){
    width:100px;
    height:100px;
    margin:auto;
}
@media screen and (max-width:740px){
    width:100px;
    height:100px;
    margin:auto;
}
@media screen and (max-width:1090px) and (min-width:740px){
    width:100px;
    height:100px;
    margin:auto;
}
@media screen and(min-width:1090px){
    width:100px;
    height:100px;
    margin:auto;
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
    height: auto;
    padding-bottom: 42px;
    @media screen and (max-width:300px) and (min-width:200px){
        grid-template-columns: 164px;
        grid-row-gap: 50px;
        justify-content:end;
        gap:1vw;
    }
    @media screen and (max-width:500px)and (min-width:300px){
        grid-template-columns: 30% 30% 30% ;
        // grid-row-gap: 50px;
        // justify-content:end;
        gap:5vw;
    }
    @media screen and (max-width:740px)and (min-width:500px){
        grid-template-columns: 30% 30%  30%;
        gap:1vw;
        // grid-row-gap: 50px;
    }
    @media screen and (max-width:1000px) and (min-width:740px){
        grid-template-columns: 24% 24% 24% 24% ;
        // grid-row-gap: 50px;
        gap:2vw;
    }
    @media screen and (min-width:1000px){
        grid-template-columns: 18% 18% 18% 18% 18%;
        // grid-row-gap:50px;
        gap:2.5vw;
    }
`

export const Head = styled.h1`
font-size:2vw;

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
