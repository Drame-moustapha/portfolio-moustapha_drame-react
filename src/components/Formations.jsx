const fallbackFormations = [
    {
        date: "2025 – 2026 (en cours)",
        diplome: "Doctorat en Informatique",
        etablissement: "Université Assane Seck de Ziguinchor — Laboratoire d'Informatique et d'Ingénierie pour l'Innovation",
        description: "Recherche sur l'intelligence artificielle frugale, explicable et inclusive pour le dépistage précoce du diabète et l'aide à la décision clinique.",
        competences: [
            "Intelligence artificielle explicable",
            "Machine learning",
            "Recherche scientifique",
            "Analyse de données de santé",
            "Aide à la décision clinique",
            "Rédaction scientifique",
        ],
    },
    {
        date: "2022 – 2024",
        diplome: "Master en Informatique — spécialité Génie Logiciel",
        etablissement: "Université Assane Seck, Ziguinchor",
        description: "Formation avancée en conception et développement de logiciels et d'applications informatiques.",
        competences: [
            "Conception logicielle",
            "Développement full stack",
            "Architecture des applications",
            "Bases de données",
            "Gestion de projets informatiques",
            "Tests et qualité logicielle",
            "Probabilités",
            "Français",
            "Anglais",
            "Réseaux informatiques",
        ],
    },
    {
        date: "2018 – 2021",
        diplome: "Licence en Informatique",
        etablissement: "Université Assane Seck, Ziguinchor",
        description: "Parcours Licence détaillé année par année : principales matières étudiées et compétences acquises.",
        niveaux: [
            {
                nom: "Licence 1 – Mathématiques, Physique et Informatique",
                date: "2018 – 2019",
                matieres: [
                    "Mathématiques : Analyse 1 et 2, Algèbre 1 et 2",
                    "Informatique : Environnement de travail informatique, Introduction à l’algorithmique, Algorithmique et programmation, Logique combinatoire et séquentielle",
                    "Physique : Électrostatique et magnétostatique, Physique newtonienne, Électricité, Optique géométrique",
                    "Anglais 1",
                ],
                competences: [
                    "Maîtrise des bases de l’algorithmique et de la programmation",
                    "Initiation à la logique informatique et aux systèmes combinatoires",
                    "Utilisation de l’environnement informatique",
                    "Raisonnement mathématique et résolution de problèmes",
                    "Compréhension des principes fondamentaux de la physique",
                ],
            },
            {
                nom: "Licence 2 – Mathématiques et Informatique",
                date: "2019 – 2020",
                matieres: [
                    "Mathématiques : Analyse 3 et 4, Algèbre 3, Probabilité, Équations aux dérivées partielles",
                    "Informatique : Algorithmique et programmation 2, Langage C, Analyse et conception des systèmes d’information, Architecture des ordinateurs",
                    "Anglais 2",
                    "Physique : Électromagnétisme dans le vide, Mécanique",
                ],
                competences: [
                    "Programmation en langage C et approfondissement de l’algorithmique",
                    "Analyse et conception de systèmes d’information",
                    "Compréhension de l’architecture et du fonctionnement des ordinateurs",
                    "Application des méthodes mathématiques et probabilistes",
                    "Raisonnement analytique et résolution de problèmes informatiques",
                ],
            },
            {
                nom: "Licence 3 – Informatique",
                date: "2020 – 2021",
                matieres: [
                    "Développement : Programmation orientée objet, Développement Web, Programmation fonctionnelle (LISP)",
                    "Génie logiciel : Analyse et conception orientée objet, Gestion de projets informatiques, Projets tutorés",
                    "Systèmes et réseaux : Systèmes d’exploitation, Linux/Unix, Réseaux",
                    "Données et calcul : Analyse de données, Bases de données relationnelles, Analyse numérique",
                    "Informatique théorique : Théorie des langages, Compilation, Complexité et performance des algorithmes",
                    "Recherche opérationnelle et Techniques d’expression",
                ],
                competences: [
                    "Conception et développement d’applications orientées objet et Web",
                    "Programmation fonctionnelle et maîtrise des concepts de compilation",
                    "Administration et utilisation des environnements Linux/Unix",
                    "Compréhension des réseaux informatiques",
                    "Conception et manipulation de bases de données relationnelles",
                    "Analyse de données et optimisation des algorithmes",
                    "Gestion de projets informatiques et réalisation de projets tutorés",
                ],
            },
        ],
    },
    {
        date: "2017 – 2018",
        diplome: "Baccalauréat S2",
        etablissement: "Lycée de Djignabo Bassène, Ziguinchor",
        description: "Formation scientifique générale.",
        competences: [
            "Mathématiques",
            "Sciences physiques",
            "Sciences de la vie et de la Terre",
            "Raisonnement scientifique",
        ],
    },
];

export default function Formations({ content }) {
    const formations = content?.formations?.length
        ? content.formations
        : fallbackFormations;

    return (
        <section id="formations" className="px-6 py-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Formations</h2>
            <p className="text-center text-[var(--muted)] mb-10">
                Parcours académique, matières étudiées et compétences développées.
            </p>

            <div className="relative border-l border-[var(--border)] ml-3 space-y-8">
                {formations.map((formation, index) => (
                    <article key={`${formation.diplome}-${index}`} className="relative pl-8">
                        <span
                            aria-hidden="true"
                            className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]"
                        />
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                            <p className="text-[var(--accent)] text-sm font-semibold">{formation.date}</p>
                            <h3 className="text-xl font-semibold mt-1">{formation.diplome}</h3>
                            {formation.etablissement && (
                                <p className="text-[var(--muted)] mt-1">{formation.etablissement}</p>
                            )}
                            {formation.description && (
                                <p className="text-[var(--text)]/80 mt-3 leading-relaxed">{formation.description}</p>
                            )}

                            {formation.niveaux?.length > 0 && (
                                <div className="mt-6 space-y-5">
                                    <h4 className="text-base font-bold">Détail du parcours de Licence</h4>
                                    <ol className="space-y-5" aria-label="Matières et compétences de chaque année de Licence">
                                        {formation.niveaux.map((niveau) => (
                                            <li key={niveau.nom} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                                    <h5 className="font-bold text-[var(--accent)]">{niveau.nom}</h5>
                                                    <span className="text-sm text-[var(--muted)]">{niveau.date}</span>
                                                </div>
                                                {niveau.matieres?.length > 0 && (
                                                    <div className="mt-4">
                                                        <h6 className="text-sm font-semibold">Principales matières relevées</h6>
                                                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                                                            {niveau.matieres.map((matiere) => (
                                                                <li key={matiere} className="flex gap-2">
                                                                    <span className="text-[var(--accent)]" aria-hidden="true">•</span>
                                                                    <span>{matiere}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                {niveau.competences?.length > 0 && (
                                                    <div className="mt-4">
                                                        <h6 className="text-sm font-semibold">Compétences acquises</h6>
                                                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                                                            {niveau.competences.map((competence) => (
                                                                <li key={competence} className="flex gap-2">
                                                                    <span className="text-[var(--accent)]" aria-hidden="true">✓</span>
                                                                    <span>{competence}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )}

                            {formation.competences?.length > 0 && (
                                <div className="mt-5">
                                    <h4 className="text-sm font-semibold mb-3">Compétences développées</h4>
                                    <ul className="flex flex-wrap gap-2" aria-label={`Compétences développées : ${formation.diplome}`}>
                                        {formation.competences.map((competence) => (
                                            <li
                                                key={competence}
                                                className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-sm text-[var(--muted)]"
                                            >
                                                {competence}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
