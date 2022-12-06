import { Button, Intro, Title } from "./HeaderStyle"
// import Resume from './ParamRaj_Resume.pdf';


export default function Header() {

    function handleClick(){
        return window.open("https://drive.google.com/u/0/uc?id=1N-tpdNqLwWpmLh2G_YlrWN4DzLNTvq2K&export=download");
    }

    return <>
        <Intro id='home'>
            Hello I'm a</Intro>
        <Title>
            Full Stack Web Developer
        </Title>
        <a href=""  title="ParamRaj_Resume.pdf" download={"ParamRaj_Resume.pdf"} onClick={handleClick}><Button>Get Resume</Button></a>
    </>
}


// ParamRaj_Resume.pdf