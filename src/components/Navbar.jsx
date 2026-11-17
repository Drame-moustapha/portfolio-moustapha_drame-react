import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const links = [
    { name: "À propos", href: "#about" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Formation", href: "#formations" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="site-nav" aria-label="Navigation principale">
            <div className="nav-inner">
                <a className="brand-mark" href="#home" aria-label="Moustapha DRAME, accueil">MD<span>.</span></a>
                <div className="nav-links">
                    {links.map((link) => <a key={link.href} href={link.href}>{link.name}</a>)}
                </div>
                <a className="nav-cta" href="#contact">Me contacter <FiArrowUpRight aria-hidden="true" /></a>
                <button className="nav-menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
                    {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>
            {open && <div className="mobile-nav-links">
                {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.name}</a>)}
                <a href="#contact" onClick={() => setOpen(false)}>Me contacter ↗</a>
            </div>}
        </nav>
    );
}
