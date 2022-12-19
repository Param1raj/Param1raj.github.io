import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/HeaderStyle/Header";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import ContactMe from "../Components/ContactMe/Contact";
import Projects from "../Components/Projects/Project";
import Services from "../Components/Services/Services";
import { useRef } from "react";
import Calender from "../Components/Calender/Calender";
import { Callhere } from "../Components/Callhere/Callhere";
export default function Home (){
    const Homeref = useRef(null);
    const Skillref = useRef(null);
    const Serviceref = useRef(null);
    const Projectref = useRef(null);
    const Contactref = useRef(null);
    const Aboutref = useRef(null);
    return <>
    <Navbar Homeref={Homeref} Aboutref= {Aboutref} Skillref = {Skillref} Projectref = {Projectref} Serviceref = {Serviceref} Contactref={Contactref} />
    <Header ref = {Homeref}/>
    <About  ref ={Aboutref}/>
    <Skills ref = {Skillref}/>
    <Services ref = {Serviceref}/>
    <Projects ref ={Projectref} />
    <Calender/>
    <ContactMe ref= {Contactref}/>
    {
    
        console.log(Homeref,Skillref,Serviceref,Projectref,Contactref)

    }
    {/* <Callhere/> */}
        </>
}