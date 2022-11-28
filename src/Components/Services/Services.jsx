import {  Container, Heading } from "../Projects/ProjectStyle"
import { Boxes,Box, Image, Head } from "./ServicesStyle"

export default function Services() {
    const arr = [1, 1, 1, 1, 1, 1];
    console.log(arr)
    return <>
        <Container style={{ background: 'transparent',height:"auto" }} id='skills'>
            <Heading>
                Skills
            </Heading>
            <Boxes >

                <Box background='#212121;'>
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></Image>
                    <Head style={{ color: "white" }}>React</Head>
                </Box>
                <Box background='#212121;'>
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <Head style={{ color: "white" }}>HTML</Head>
                </Box>
                <Box background='#212121;'>

                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <Head style={{ color: "white" }}>CSS</Head>
                </Box>
                <Box background='#212121;'>

                    <Image style={{borderRadius:'30px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <Head style={{ color: "white" }}>JS</Head>
                </Box>
                <Box background='#212121;'>

                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    <Head style={{ color: "white" }}>MongoDb</Head>
                </Box>
                <Box background='#212121;'>
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                    <Head style={{ color: "white" }}>NodeJs</Head>
                </Box>
                <Box background='#212121;'>
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                    <Head style={{ color: "white" }}>Express</Head>
                </Box>
                <Box background='#212121;'>

                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />

                    <Head style={{ color: "white" }}>Bootstrap</Head>
                </Box>
                <Box background='#212121;'>

                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <Head style={{ color: "white" }}>Redux</Head>
                </Box>

            </Boxes>
        </Container>
    </>
}