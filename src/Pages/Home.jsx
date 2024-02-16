import Header from "../Components/HeaderStyle/Header";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import ContactMe from "../Components/ContactMe/Contact";
import Projects from "../Components/Projects/Project";
import Skills from "../Components/Skills/Skills";
import { useRef } from "react";
import DrawerAppBar from "../Components/Navbar/MuiNav";
import Footer from "../Components/Footer/Footer";
import Email from "../Components/ContactMe/Email";
// import { Callhere } from "../Components/Callhere/Callhere";
export default function Home() {
  const Homeref = useRef(null);
  const Skillref = useRef(null);
  const Serviceref = useRef(null);
  const Projectref = useRef(null);
  const Contactref = useRef(null);
  const Aboutref = useRef(null);
  return (
    <>
      <DrawerAppBar />
      <Header ref={Homeref} />
      <About ref={Aboutref} />
      <Services ref={Serviceref} />
      <Skills ref={Skillref} />
      <Projects ref={Projectref} />
      <ContactMe ref={Contactref} />
      {/* <Email /> */}
      <Footer />
    </>
  );
}
