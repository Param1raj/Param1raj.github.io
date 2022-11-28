import { Boxes, BoxesItems, Button, Buttons, Container, Heading } from "./ProjectStyle";
import project1 from './React App - Google Chrome 17-10-2022 18_54_00.png'
import project2 from './TimeCamp.png'
export default function Projects(){
    return <>
    <Container id="project">
        <Heading>Projects</Heading>
        <Boxes>
            <BoxesItems>
                <h3 style={{color:"white"}}>Rentomojo</ h3>
                <img src={project1} width="90%" style={{borderRadius:'20px'}} alt="" />
                <Button>
                <a href="https://hellow-this-is-param1raj.netlify.app/"><Buttons>Live</Buttons></a>
                <a href="https://github.com/Param1raj/sore-rate-9569"> <Buttons>GitHub</Buttons></a>
                </Button>
            </BoxesItems>
            <BoxesItems>
                <h3 style={{color:"white"}}>TimeCamp</ h3>
                <img src={project2} width="90%" style={{borderRadius:'20px'}} alt="" />
                <Button>
                    <a href='https://astonishing-sorbet-368da1.netlify.app/index.html'><Buttons>Live</Buttons></a>
                    <a href="https://github.com/singhprakash14/husky-care-7787"><Buttons>GitHub</Buttons></a>
                </Button>
            </BoxesItems>
        </Boxes>
    </Container>
        </>
}