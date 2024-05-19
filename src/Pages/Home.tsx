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
export default function Home() {
  return (
    <>
      <DrawerAppBar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <ContactMe />
      {/* <Email /> */}
      <Footer />
    </>
  );
}
