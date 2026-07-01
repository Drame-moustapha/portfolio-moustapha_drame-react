import {
    FiDownload,
    FiArrowRight,
    FiGithub,
    FiCpu
} from "react-icons/fi";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex items-center overflow-hidden bg-black text-white min-h-screen pt-24 pb-16"
        >
            {/* Background futuriste */}
            <div
                className="absolute top-0 right-0 rounded-full bg-info opacity-20"
                style={{ width: "550px", height: "550px", filter: "blur(150px)" }}
            />

            <div className="relative w-full max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-10 items-center">

                    {/* PARTIE TEXTE */}
                    <div className="lg:col-span-7 text-center lg:text-left">

                        <span className="inline-flex items-center gap-2 bg-info text-black font-semibold px-3 py-2 rounded-full mb-4 text-sm">
                            <FiCpu />
                            Doctorant en Informatique
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Moustapha
                            <span className="block text-info">DRAME</span>
                        </h1>

                        <h2 className="text-2xl font-semibold mt-3">
                            Ingénieur Génie Logiciel
                        </h2>

                        <h3 className="text-info text-xl font-medium mt-2 leading-relaxed">
                            Intelligence Artificielle
                            <br />
                            Données &amp; Connaissances
                            <br />
                            Santé numérique
                        </h3>

                        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                            Doctorant en Informatique à l'Université Assane Seck de
                            Ziguinchor au sein du Laboratoire d'Informatique et
                            d'Ingénierie pour l'Innovation.
                            <br />
                            <br />
                            Mes recherches portent sur une intelligence artificielle
                            frugale, explicable et inclusive pour le dépistage précoce du
                            diabète et l'aide à la décision clinique en Afrique de l'Ouest.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                            <a
                                href="/documents/CV_Moustapha_DRAME.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-info text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
                            >
                                <FiDownload />
                                Mon CV
                            </a>

                            <a
                                href="#experience"
                                className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition"
                            >
                                Recherche
                                <FiArrowRight />
                            </a>
                        </div>

                        {/* Réseaux */}
                        <div className="flex gap-5 mt-8 justify-center lg:justify-start text-2xl">
                            <a
                                href="https://github.com/Drame-moustapha"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-info transition"
                                aria-label="GitHub"
                            >
                                <FiGithub />
                            </a>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative inline-block">
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-info opacity-20"
                                style={{ width: "400px", height: "400px" }}
                            />
                            <img
                                src="/images/moustaphaDrame.jpg"
                                alt="Moustapha DRAME"
                                className="relative rounded-full shadow-lg border-4 border-info object-cover"
                                style={{ width: "340px", height: "340px" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
