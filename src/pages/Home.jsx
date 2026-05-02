import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experiences";
import Skills from "../components/Skills";
import Certificats from "../components/Certificats";


export default function Home() {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certificats/>
            <Contact />
        </div>
    );
}