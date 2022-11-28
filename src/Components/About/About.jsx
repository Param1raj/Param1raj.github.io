import { Action, Heading, Profile, Image, Details } from "./AboutStyle"
import logo from './param.png';
import Typical from "react-typical";
export default function About() {
    return <>
        <Action id="about">
            <Heading>About Me</Heading>
            <Profile>
                <Image src={logo} alt="profile.pic"></Image>
                <Details>
                    <span style={{
                        fontSize: "2.5vw",
                        display: "flex",
                        marginTop: "auto",
                    }} >I am Param Raj and I'm<span style={{fontWeight: "bold",
                        marginLeft: "10px",
                        color: "rgb(73, 179, 135)"}}><Typical loop={Infinity}
                        steps={["a Developer", 1000, "Problem Solver", 1000, "Action oriented", 1000]} /></span>
                    </span>
                    <p style={{    textAlign: "justify",
                        fontSize: "1.5vw"}}>
                        Aspiraning Full Stack Web Developer, experienced
                        in real-life projects with strong knowledge of
                        React JS. Highly adaptive and eager to learn new
                        technologies. Looking forward to the opportunity
                        of working in a company, to contribute
                        with proficient Tech and Soft skills.
                    </p>
                </Details>
            </Profile>
        </Action>
    </>
}