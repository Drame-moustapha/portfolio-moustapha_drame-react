const fallbackExperiences = [
    {
        date: "2026",
        poste: "Doctorant en Informatique",
        entreprise: "Université Assane Seck de Ziguinchor",
        missions: [
            "Recherche sur l'intelligence artificielle frugale et explicable",
            "Conception de systèmes d'aide à la décision clinique",
        ],
    },
    {
        date: "2026",
        poste: "Ingénieur de recherche — Jeu sérieux en logique combinatoire",
        entreprise: "UNCHK",
        missions: [
            "Conception d'un jeu sérieux pédagogique",
            "Développement de scénarios interactifs",
            "Expérimentation auprès des apprenants",
        ],
    },
    {
        date: "2024 – 2025",
        poste: "Développeur Full Stack",
        entreprise: "Direction Informatique et Systèmes d'Information – UASZ",
        missions: [
            "Développement d'une plateforme de recrutement en ligne",
            "API REST sécurisées (Spring Boot)",
            "Frontend React.js",
            "Mise en place de CI/CD (GitLab)",
        ],
    },
];

export default function Experience({ content }) {
    const experiences = content?.experiences?.length
        ? content.experiences
        : fallbackExperiences;

    return (
        <section id="experience" className="px-6 py-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Expériences</h2>

            <div className="relative border-l border-gray-700 ml-3 space-y-10">
                {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-info" />

                        <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
                            <p className="text-info text-sm font-semibold">{exp.date}</p>

                            <h3 className="text-xl font-semibold mt-1">
                                {exp.poste}
                            </h3>

                            {exp.entreprise && (
                                <p className="text-gray-400">{exp.entreprise}</p>
                            )}

                            {exp.description && (
                                <p className="text-gray-300 mt-3">{exp.description}</p>
                            )}

                            {exp.missions && (
                                <ul className="mt-4 space-y-2 text-gray-300">
                                    {exp.missions.map((m, j) => (
                                        <li key={j} className="flex gap-2">
                                            <span className="text-info">✔</span> {m}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
