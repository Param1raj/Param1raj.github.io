import React from "react";
import { Box, Boxes, BoxesItems, Headline,Image,Text } from "./SkillsStyle";
export default function Skills() {
    // <a href="https://iconscout.com/icons/code" target="_blank">Code Icon</a> by <a href="https://iconscout.com/contributors/maninderkaur" target="_blank">maninderkaur</a>
    return <>
        <Box id="services">
            <Headline>My Services</Headline>
            <Boxes>
                <BoxesItems>
                    <div style={{ padding: "20px" }}>

                        <Image src="https://flaticons.net/custom.php?i=YNxxtzyT05DMwibIVIeIxbhpeqkyI7&format=png&size=256" />

                    </div>
                    <Text >WebDesign</Text>
                </BoxesItems>
                <BoxesItems>
                    <div style={{ padding: "20px" }}>
                        <Image src="https://flaticons.net/custom.php?i=yzkZtjGI8bQX3UJIVIaIamcelop2uX&format=png&size=256" />
                    </div>
                    <Text >Front End</Text>
                </BoxesItems>
                <BoxesItems>
                    <div style={{ padding: "20px" }}>
                        <Image src="https://flaticons.net/custom.php?i=r5QFYZtNaD4QiBIxIkIxDhjPZYlu5&format=png&size=256" />
                    </div>
                    <Text >Back End</Text>
                </BoxesItems>
            </Boxes>
        </Box>
    </>

}