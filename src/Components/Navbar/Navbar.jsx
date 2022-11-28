import {useState} from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll';

export default function Navbar1(props){
  const styles = {
    color:'white'
  }
    console.log(props)
    const [colorChange,setColorChange] = useState(false);
    const ChangeNavColor = ()=>{
        if(window.scrollY >= 30){
            setColorChange(true)
        }
        else{
            setColorChange(false);
        }
    }
    window.addEventListener('scroll',ChangeNavColor);


    
    return <>
 <Navbar bg={"black"} expand="lg" className={colorChange?'boxes':'box'}>
      <Container >
        <Navbar.Brand style={{color:'white'}} className="title" href="#home">Param Raj</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link style={styles} className="homeLink" to="home" smooth={true} spy={true}>Home</Link>
          <Link style={styles} className="homeLink" to="about" smooth={true} spy={true}>About</Link>
          <Link style={styles} className="homeLink" to="skills" smooth={true} spy={true}>Skill</Link>
          <Link style={styles} className="homeLink" to="services" smooth={true} spy={true}>services</Link>
          <Link style={styles} className="homeLink" to="project" smooth={true} spy={true}>Project</Link>
          <Link style={styles} className="homeLink" to="contact" smooth={true} spy={true}>Contact</Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
}