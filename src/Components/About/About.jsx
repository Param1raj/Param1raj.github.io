import { Action, Heading, Profile, Image, Details } from "./AboutStyle"
import logo from './param.png';
import Typical from "react-typical";
import styled from "styled-components";
export default function About() {
    return <>
        <Action id="about">
            <Heading>About Me</Heading>
            <Profile>
                <Image src={logo} alt="profile.pic"></Image>
                <Details>
                    <span style={{
                        fontSize: "3vw",
                        display: "flex",
                        marginTop: "auto",
                    }} >I am Param Raj and I'm<span style={{fontWeight: "bold",
                        marginLeft: "10px",
                        color: "rgb(73, 179, 135)"}}><Typical loop={Infinity}
                        steps={["a Developer", 1000, "Problem Solver", 1000, "Action oriented", 1000]} /></span>
                    </span>
                    <Paragraph>
                        Aspiring Full Stack Web Developer, experienced
                        in real-life projects with strong knowledge of
                        React JS. Highly adaptive and eager to learn new
                        technologies. Looking forward to the opportunity
                        of working in a company, to contribute
                        with proficient Tech and Soft skills.
                    </Paragraph>
                </Details>
            </Profile>
        </Action>
    </>
}


export const Paragraph = styled.div`
font-size:1.5vw;
text-align:initial;
    @media all and (min-width:320px) and (max-width:500px){
        font-size:2.6vw;
    }
`