import { Container, Heading } from "./ContactStyle";
import { Box } from './ContactStyle'
export default function ContactMe() {
    return <>
        <Container id="contact">
            <Heading>
                Contact Me
            </Heading>
            {/* style={{width:"80%",margin:"auto",textAlign:'left',display:"grid",gridTemplateColumns:["50% 50%","50"]}}https://cdn-icons-png.flaticon.com/512/1384/1384014.png */}
            <Box >
                <div style={{border:'1px solid red',display:"flex",flexWrap:'wrap'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" width="100px" height="100px" alt="facebook icon"></img>
                    <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" width="100px" height="100px" alt="insta icon"></img>
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" width="100px" height="100px" alt="insta icon"></img>
                </div>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
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