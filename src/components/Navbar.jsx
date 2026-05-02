import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Certificats", href: "#certificats" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full z-50 backdrop-blur bg-black/70 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <h1 className="font-bold text-xl">M.D</h1>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-6">
                    {links.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="hover:text-gray-400 transition">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* MOBILE ICON */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4">
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