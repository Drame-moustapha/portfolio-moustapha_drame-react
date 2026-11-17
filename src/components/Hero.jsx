import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero({ content }) {
    const contact = content?.contact || {
        github: "https://github.com/Drame-moustapha",
        linkedin: "https://www.linkedin.com/in/moustaphadramekandji/",
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-grid-pattern" aria-hidden="true" />
            <div className="hero-container">
                <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                    <span className="eyebrow"><span className="status-dot" /> Doctorant en informatique · Ingénieur logiciel</span>
                    <h1>Construire des solutions<br /><span>intelligentes et utiles.</span></h1>
                    <p className="hero-lead">Je suis <strong>Moustapha DRAME</strong>, doctorant et ingénieur logiciel. Je m’intéresse à l’intelligence artificielle, la science des données et aux technologies qui améliorent la santé et la société.</p>
                    <div className="hero-actions">
                        <a href="#projects" className="button-primary">Découvrir mes projets <FiArrowUpRight aria-hidden="true" /></a>
                        <a href="/documents/CV_Moustapha_DRAME.pdf" target="_blank" rel="noopener noreferrer" className="button-secondary"><FiDownload aria-hidden="true" /> Télécharger mon CV</a>
                    </div>
                    <div className="hero-socials">
                        <span>Retrouvez-moi</span>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                        <a href="mailto:drame779576559@gmail.com" aria-label="E-mail"><FiArrowUpRight /></a>
                    </div>
                </motion.div>
                <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
                    <div className="portrait-orbit orbit-one" aria-hidden="true" />
                    <div className="portrait-orbit orbit-two" aria-hidden="true" />
                    <div className="portrait-frame"><img src="/images/moustaphaDrame.jpg" alt="Portrait de Moustapha DRAME" /></div>
                    <div className="floating-card"><span className="floating-icon">✳</span><span><strong>Recherche &amp; innovation</strong><small>IA · Données · Santé numérique</small></span></div>
                    <div className="hero-index">01 <span>—</span> PORTFOLIO</div>
                </motion.div>
            </div>
            <a className="scroll-cue" href="#about"><span>Faire défiler</span><FiArrowDownRight aria-hidden="true" /></a>
        </section>
    );
}
