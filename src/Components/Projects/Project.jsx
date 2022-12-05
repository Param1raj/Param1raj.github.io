import { Boxes, BoxesItems, Button, Buttons, Container, Heading,H3 ,Description, UL} from "./ProjectStyle";
import project1 from './React App - Google Chrome 17-10-2022 18_54_00.png'
import project2 from './TimeCamp.png';
import {CiStreamOn} from 'react-icons/ci';
import {AiFillGithub} from 'react-icons/ai';

export default function Projects(){
    return <>
    <Container id="project">
        <Heading>Projects</Heading>
        <Boxes>
            <BoxesItems>
                <H3 >Rentomojo</ H3>
                <img src={project1} width="90%" style={{borderRadius:'5px'}} alt="" />
                <Description>
                <h6 style={{fontWeight:'bold'}}>Description</h6>
                <Button>
                <a href="https://hellow-this-is-param1raj.netlify.app/" target={'blank'}><Buttons><CiStreamOn/></Buttons></a>
                <a href="https://github.com/Param1raj/sore-rate-9569" target={'blank'}> <Buttons><AiFillGithub/></Buttons></a>
                </Button>
                RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. This is a Solo project which is a clone of Rentomojo
                </Description>
                <Description>
                <h6 style={{fontWeight:'bold'}}>Tech-Stack:-
                <UL style={{display:'flex',columnGap:'20px',flexWrap:'wrap'}}>
                <li>React</li>
                <li>ChakraUI</li>
                <li>JavaScript</li>
                <li>Styled-components</li>
                <li>React-Bootstrap</li>
                <li>JSON-Server</li>
                </UL></h6>
                </Description>
            </BoxesItems>
            <BoxesItems>
                <H3 >TimeCamp</ H3>
                <img src={project2} width="90%" style={{borderRadius:'5px'}} alt="" />
                <Description>
                <h6 style={{fontWeight:'bold'}}>Description</h6>
                <Button>
                    <a href='https://astonishing-sorbet-368da1.netlify.app/index.html'><Buttons><CiStreamOn/></Buttons></a>
                    <a href="https://github.com/singhprakash14/husky-care-7787"><Buttons><AiFillGithub/></Buttons></a>
                </Button>
                RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. This is a Solo project which is a clone of Rentomojo
                </Description>
                <Description>
                <h6 style={{fontWeight:'bold'}}>Tech-Stack:-
                <UL style={{display:'flex',columnGap:'20px',flexWrap:'wrap'}}>
                <li>React</li>
                <li>ChakraUI</li>
                <li>JavaScript</li>
                <li>Styled-components</li>
                <li>React-Bootstrap</li>
                <li>JSON-Server</li>
                </UL></h6>
                </Description>
            </BoxesItems>
            <BoxesItems>
                <H3 >Beauty Bebo</ H3>
                <img src={project2} width="90%" style={{borderRadius:'5px'}} alt="" />
                <Description>
                <h6 style={{fontWeight:'bold'}}>Description</h6>
                <Button>
                    <a href='https://astonishing-sorbet-368da1.netlify.app/index.html'><Buttons><CiStreamOn/></Buttons></a>
                    <a href="https://github.com/singhprakash14/husky-care-7787"><Buttons><AiFillGithub/></Buttons></a>
                </Button>
                RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. This is a Solo project which is a clone of Rentomojo
                </Description>
                <Description>
                <h6 style={{fontWeight:'bold'}}>Tech-Stack:-
                <UL style={{display:'flex',columnGap:'20px',flexWrap:'wrap'}}>
                <li>React</li>
                <li>ChakraUI</li>
                <li>JavaScript</li>
                <li>Styled-components</li>
                <li>React-Bootstrap</li>
                <li>JSON-Server</li>
                </UL></h6>
                </Description>
            </BoxesItems>
            <BoxesItems>
                <H3 >PharmEasy</ H3>
                <img src={project2} width="90%" style={{borderRadius:'5px'}} alt="" />
                <Description>
                <h6 style={{fontWeight:'bold'}}>Description</h6>
                <Button>
                    <a href='https://astonishing-sorbet-368da1.netlify.app/index.html'><Buttons><CiStreamOn/></Buttons></a>
                    <a href="https://github.com/singhprakash14/husky-care-7787"><Buttons><AiFillGithub/></Buttons></a>
                </Button>
                RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. This is a Solo project which is a clone of Rentomojo
                </Description>
                <Description>
                <h6 style={{fontWeight:'bold'}}>Tech-Stack:-
                <UL style={{display:'flex',columnGap:'20px',flexWrap:'wrap'}}>
                <li>React</li>
                <li>ChakraUI</li>
                <li>JavaScript</li>
                <li>Styled-components</li>
                <li>React-Bootstrap</li>
                <li>JSON-Server</li>
                </UL></h6>
                </Description>
            </BoxesItems>
            <BoxesItems>
                <H3 >Todo App</ H3>
                <img src={project2} width="90%" style={{borderRadius:'5px'}} alt="" />
                <Description>
                <h6 style={{fontWeight:'bold'}}>Description</h6>
                <Button>
                    <a href='https://astonishing-sorbet-368da1.netlify.app/index.html'><Buttons><CiStreamOn/></Buttons></a>
                    <a href="https://github.com/singhprakash14/husky-care-7787"><Buttons><AiFillGithub/></Buttons></a>
                </Button>
                RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. This is a Solo project which is a clone of Rentomojo
                </Description>
                <Description>
                <h6 style={{fontWeight:'bold'}}>Tech-Stack:-
                <UL style={{display:'flex',columnGap:'20px',flexWrap:'wrap'}}>
                <li>React</li>
                <li>ChakraUI</li>
                <li>JavaScript</li>
                <li>Styled-components</li>
                <li>React-Bootstrap</li>
                <li>JSON-Server</li>
                </UL></h6>
                </Description>
            </BoxesItems>
        </Boxes>
    </Container>
        </>
}