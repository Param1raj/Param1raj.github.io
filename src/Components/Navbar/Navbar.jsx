import { useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";

// import Resume from './ParamRaj_Resume.pdf';

export default function Navbar1(props) {
  const styles = {
    color: "white",
  };
  console.log(props);
  const [colorChange, setColorChange] = useState(false);
  const ChangeNavColor = () => {
    if (window.scrollY >= 30) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", ChangeNavColor);

  function handleClick() {
    return window.open(
      "https://drive.google.com/u/0/uc?id=1N-tpdNqLwWpmLh2G_YlrWN4DzLNTvq2K&export=download"
    );
  }

  return (
    <>
      <Navbar
        bg={"black"}
        expand="lg"
        className={colorChange ? "boxes" : "box"}
      >
        <Container style={{ border: "1px solid blue", width: "100vw" }}>
          <Navbar.Brand
            style={{
              color: "white",
              fontSize: "50px",
              // border: "1px solid red",
            }}
            className="title"
            href="/home"
          >
            Param Raj
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="links">
                <Link
                  style={styles}
                  className="homeLink"
                  to="home"
                  smooth={true}
                  spy={true}
                >
                  Home
                </Link>
              </div>
              <div className="links">
                <Link
                  style={styles}
                  className="homeLink"
                  to="about"
                  smooth={true}
                  spy={true}
                >
                  About Me
                </Link>
              </div>
              <div className="links">
                <Link
                  style={styles}
                  className="homeLink"
                  to="skills"
                  smooth={true}
                  spy={true}
                >
                  Skills
                </Link>
              </div>
              <div className="links">
                <Link
                  style={styles}
                  className="homeLink"
                  to="services"
                  smooth={true}
                  spy={true}
                >
                  Services
                </Link>
              </div>
              <div className="links">
                <Link
                  style={styles}
                  className="homeLink"
                  to="project"
                  smooth={true}
                  spy={true}
                >
                  Project
                </Link>
              </div>
              <div className="links">
                <Link
                  style={styles}
                  className="homeLink"
                  to="contact"
                  smooth={true}
                  spy={true}
                >
                  Contact
                </Link>
              </div>
              <div className="links">
                <Text
                  as={Link}
                  _hover={{ textDecoration: "none" }}
                  href="https://drive.google.com/u/0/uc?id=1N-tpdNqLwWpmLh2G_YlrWN4DzLNTvq2K&export=download"
                  style={styles}
                  className="homeLink"
                  onClick={handleClick}
                >
                  Resume
                </Text>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
