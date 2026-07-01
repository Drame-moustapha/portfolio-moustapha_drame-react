import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "Plateforme de recrutement académique",
        desc: "Application web développée pour la Direction Informatique et Systèmes d'Information de l'UASZ, permettant de digitaliser et centraliser la gestion des campagnes de recrutement académique : dépôt de candidatures, suivi des dossiers et API REST sécurisées.",
        tech: ["Spring Boot", "React", "API REST", "CI/CD"],
        github: "https://github.com/Drame-moustapha",
    },
    {
        title: "Analyse Big Data de médias",
        desc: "Pipeline de collecte et traitement de données à grande échelle : scraping automatisé de contenus médias, transformation (ETL) et stockage distribué dans Cassandra pour permettre des analyses ultérieures.",
        tech: ["Python", "Cassandra", "ETL"],
        github: "https://github.com/Drame-moustapha",
    },
    {
        title: "Prédiction par réseau LSTM",
        desc: "Modèle de deep learning basé sur des réseaux LSTM pour la prédiction sur données séquentielles, appliqué à des séries temporelles. Implémentation et entraînement du modèle avec TensorFlow/Keras.",
        tech: ["TensorFlow", "Keras", "Python"],
        github: "https://github.com/Drame-moustapha",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Projets</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="bg-gray-900 p-5 rounded-xl hover:scale-105 hover:bg-gray-800 transition flex flex-col"
                    >
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2 flex-1">{p.desc}</p>

                        <div className="flex gap-2 mt-4 flex-wrap">
                            {p.tech.map((t, j) => (
                                <span key={j} className="bg-gray-700 px-2 py-1 text-sm rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-5">
                            {p.github && (
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-sm border border-gray-600 px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition"
                                >
                                    <FiGithub /> Code
                                </a>
                            )}
                            {p.demo && (
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-sm border border-gray-600 px-3 py-1.5 rounded-lg hover:bg-white hover:text-black transition"
                                >
                                    <FiExternalLink /> Démo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
