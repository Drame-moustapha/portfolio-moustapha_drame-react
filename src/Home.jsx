import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experiences.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

const Projects = lazy(() => import("./components/Projects.jsx"));
const Certificats = lazy(() => import("./components/Certificats.jsx"));
const Formations = lazy(() => import("./components/Formations.jsx"));

export default function Home({ content }) {
    return (
        <div className="site-shell">
            <Navbar />
            <main>
                <Hero content={content} />
                <About content={content} />
                <Experience content={content} />
                <Suspense fallback={<div className="section-loading">Chargement du portfolio…</div>}>
                    <Projects />
                    <Skills content={content} />
                    <Formations content={content} />
                    <Certificats />
                </Suspense>
                <Contact />
            </main>
            <footer className="site-footer">
                <a className="footer-brand" href="#home">MD<span>.</span></a>
                <p>Conçu avec soin · Moustapha DRAME</p>
                <a href="#home" className="back-to-top">Retour en haut ↑</a>
            </footer>
        </div>
    );
}
