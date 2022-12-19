import { Container, Heading, Image  } from "./ContactStyle";
import { Box } from './ContactStyle'
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Button } from "@chakra-ui/react";
export default function ContactMe() {
    return <>
        <Container id="contact">
            <Heading>
                Contact Me
            </Heading>
            {/* style={{width:"80%",margin:"auto",textAlign:'left',display:"grid",gridTemplateColumns:["50% 50%","50"]}}https://cdn-icons-png.flaticon.com/512/1384/1384014.png */}
            <Box >
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start", gap: '10px' }}>
                    <OverlayTrigger
                        trigger="click"
                        key={'right'}
                        placement={'right'}
                        overlay={
                            <Popover id={`popover-positioned-right`}>
                                <Popover.Header as="h3">Email</Popover.Header>
                                <Popover.Body>
                                    <strong>pr6587424@gmail.com</strong>
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button h='fit-content' w='fit-content' borderRadius={"50%"}> 
                            <Image src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" width="100px" height="100px" alt="insta icon"></Image></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="click"
                        key={'right'}
                        placement={'right'}
                        overlay={
                            <Popover id={`popover-positioned-right`}>
                                <Popover.Header as="h3">Phone or Whats-App</Popover.Header>
                                <Popover.Body>
                                    <strong>+91 7818869663</strong>
                                </Popover.Body>
                            </Popover>
                        }>
                        <Button h='fit-content' w='fit-content' borderRadius={"50%"}> 
                        <Image src="https://cdn-icons-png.flaticon.com/512/455/455705.png" width="100px" height="100px" alt="insta icon"></Image></Button>
                    </OverlayTrigger>
                    
                    <a href="https://github.com/Param1raj" target={"_blank"}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github icon"></Image></a>
                    <a href="https://www.linkedin.com/in/param-raj-997aa41ba/" target={"_blank"}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" width="100px" height="100px" alt="insta icon"></Image></a>
                    <a href="https://www.facebook.com/param.raj.9822" target={"_blank"}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" width="100px" height="100px" alt="Email icon"></Image></a>

                </div>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Motive</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Collaboration</option>
                            <option>Guildence</option>
                            <option>Offer</option>
                            <option>Projection</option>

                        </select>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Box>
        </Container>
    </>
}