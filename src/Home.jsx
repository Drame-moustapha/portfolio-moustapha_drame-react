import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experiences.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificats from "./components/Certificats.jsx";
import Contact from "./components/Contact.jsx";

export default function Home({ content }) {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Hero />
            <About content={content} />
            <Experience content={content} />
            <Skills content={content} />
            <Projects />
            <Certificats />
            <Contact />
        </div>
    );
}
