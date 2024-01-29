import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/HeaderStyle/Header";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import ContactMe from "../Components/ContactMe/Contact";
import Projects from "../Components/Projects/Project";
import Skills from "../Components/Skills/Skills";
import { useRef } from "react";
import Calender from "../Components/Calender/Calender";
import DrawerAppBar from "../Components/Navbar/MuiNav";
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
      {/* TODO: add Some more things in about section! */}
      <About ref={Aboutref} />
      <Services ref={Serviceref} />
      <Skills ref={Skillref} />
      <Projects ref={Projectref} />
      {/* <Calender /> */}
      <ContactMe ref={Contactref} />
      {console.log(Homeref, Skillref, Serviceref, Projectref, Contactref)}
    </>
  );
}
