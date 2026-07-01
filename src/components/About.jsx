export default function About({ content }) {
    const aboutText =
        content?.aboutText ||
        "Actuellement doctorant en Informatique, je m'intéresse aux nouvelles approches liées à l'intelligence artificielle, aux systèmes intelligents et aux architectures logicielles. Mon parcours en génie logiciel m'a permis de développer des compétences solides en conception d'applications web, API, DevOps et solutions basées sur les données.";

    return (
        <section id="about" className="px-6 py-24 max-w-5xl mx-auto text-center">

            <span className="inline-block bg-info/10 text-info text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Doctorat en Informatique · En cours
            </span>

            <h2 className="text-4xl font-bold mb-8">
                À propos de moi
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
                Ingénieur en génie logiciel spécialisé en Data Science et Intelligence Artificielle,
                je conçois des applications web performantes et des solutions data capables de
                résoudre des problématiques complexes du monde réel.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
                {aboutText}
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
                Je m'intéresse particulièrement à la création de systèmes intelligents,
                scalables et orientés impact — notamment pour la santé numérique en Afrique de l'Ouest.
            </p>

            {/* STATS PRO (impact visuel) */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">

                <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
                    <h3 className="text-3xl font-bold text-info">+5</h3>
                    <p className="text-gray-400 mt-1">Projets réalisés</p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
                    <h3 className="text-3xl font-bold text-info">Full Stack</h3>
                    <p className="text-gray-400 mt-1">React · Spring Boot · Node.js</p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
                    <h3 className="text-3xl font-bold text-info">Data / IA</h3>
                    <p className="text-gray-400 mt-1">Machine Learning · Deep Learning</p>
                </div>

            </div>
        </section>
    );
}
