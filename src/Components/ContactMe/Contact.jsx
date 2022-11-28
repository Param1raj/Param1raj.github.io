import { Container, Heading } from "./ContactStyle";

export default function ContactMe() {
    return <>
        <Container id="contact">
            <Heading>
                Contact Me
            </Heading>
            <div style={{width:"80%",margin:"auto",textAlign:'left'}} >
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
            </div>
        </Container>
    </>
}