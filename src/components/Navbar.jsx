import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Formations", href: "#formations" },
        { name: "Certificats", href: "#certificats" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full z-50 backdrop-blur bg-white/5 dark:bg-black/40 border-b border-[var(--border)]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <h1 className="font-bold text-xl">M.D</h1>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-6 items-center">
                    {links.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="hover:text-[var(--accent)] transition">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* RIGHT ACTIONS */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                </div>

                {/* MOBILE ICON */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button onClick={() => setOpen(!open)} className="md:hidden ml-2" aria-label="ouvrir le menu">
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-[var(--surface)]/95 border-t border-[var(--border)] px-6 py-4">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="block py-2"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
