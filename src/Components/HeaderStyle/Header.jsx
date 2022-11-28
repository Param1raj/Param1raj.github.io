import { Button, Intro, Title } from "./HeaderStyle"
import Resume from './ParamRaj_Resume.pdf';
export default function Header() {
    return <>
        <Intro id='home'>
            Hello I'm a</Intro>
        <Title>
            Full Stack Web Developer
        </Title>
        <a href=""  title="ParamRaj_Resume.pdf" download={"ParamRaj_Resume.pdf"}><Button>Get Resume</Button></a>
    </>
}


// ParamRaj_Resume.pdf