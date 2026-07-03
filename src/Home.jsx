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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About content={content} />
        <Experience content={content} />
        <Skills content={content} />

        <Suspense fallback={<div className="p-8 text-center text-[var(--muted)]">Chargement…</div>}>
          <Projects />
          <Formations />
          <Certificats />
        </Suspense>

        <Contact />
      </main>
    </div>
  );
}
