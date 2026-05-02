export default function About() {
    return (
        <section id="about" className="px-6 py-24 max-w-5xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-8">
                À propos de moi
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
                Ingénieur en génie logiciel spécialisé en Data Science et Intelligence Artificielle,
                je conçois des applications web performantes et des solutions data capables de
                résoudre des problématiques complexes du monde réel.
            </p>

            <p className="text-gray-500 mt-6">
                Mon expertise couvre le développement Full Stack (React, Spring Boot)
                ainsi que la conception de pipelines data et de modèles de machine learning.
            </p>

            <p className="text-gray-500 mt-6">
                Je m’intéresse particulièrement à la création de systèmes intelligents,
                scalables et orientés impact.
            </p>

            {/* STATS PRO (impact visuel) */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">

                <div className="bg-gray-900 p-6 rounded-xl">
                    <h3 className="text-3xl font-bold">+5</h3>
                    <p className="text-gray-400">Projets réalisés</p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                    <h3 className="text-3xl font-bold">Full Stack</h3>
                    <p className="text-gray-400">Expertise</p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                    <h3 className="text-3xl font-bold">Data / IA</h3>
                    <p className="text-gray-400">Spécialisation</p>
                </div>

            </div>
        </section>
    );
}