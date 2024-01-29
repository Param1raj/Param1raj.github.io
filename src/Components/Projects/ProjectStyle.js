import styled from "styled-components"

export const H3 = styled.h3`
color:white;
&:hover{
    color:black;
}
`
export const Container = styled.div`
width:100%;
height:auto;
border:1px solid black;
background:black;
text-align:center;
`

export const Heading = styled.div`
font-size: 39px;
margin-top: 59px;
color:white
`
export const Boxes = styled.div`
    width:100%;
    height:auto;
    margin-top:46px;
    display :flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding-bottom:50px;
    gap:10px;
`
export const Buttons = styled.button`
width: 30px;
height:30px;
border-radius: 40px;
font-size: 25px;
font-weight: bold;
border:1px solid black;
// padding-inline:10px;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    border:0px ;
    background:black;
    color:white;
    border:1px solid white;
}
`

export const Description = styled.div`
    height: fit-content;
    // border: 1px solid white;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    text-align:left;
    color:white;
    padding-inline:5px;
    font-size:small;
    &:hover{
        ${Buttons} {
            border:1px solid white;
        }
    }
`
export const BoxesItems = styled.div`
padding-top:40px;
background:black;
border: 1px solid white;
height: 100%;
width: 405px;
margin-right:0px;
border-radius:20px;
padding-bottom:30px;
&:hover{
    background: white;
    ${H3}{
        color:black;
    }
    ${Description}{
        color:grey;
        font-weight:bold;
        // border:1px solid ;
        ${Buttons}{
            border:1px solid white;
        }
    }
}
margin-bottom:20px;
`

export const Button = styled.div`
display: flex;
// justify-content: space-between;
// padding-inline: 34px;
// padding-top: 12px;
`


export const UL = styled.ul`
width: 100%;
display: flex;
flex-wrap: wrap;
column-gap: 35px;
padding-inline: revert;
`