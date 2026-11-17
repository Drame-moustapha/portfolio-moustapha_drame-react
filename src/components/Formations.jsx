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
        description: "Formation universitaire en informatique, sciences fondamentales et programmation.",
        niveaux: [
            { nom: "L1", date: "2018 – 2019" },
            { nom: "L2", date: "2019 – 2020" },
            { nom: "L3", date: "2020 – 2021" },
        ],
        competences: [
            "Mathématiques : analyse",
            "Mathématiques : algèbre",
            "Physique",
            "Statistiques avec R",
            "Réseaux informatiques",
            "Anglais",
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
                Parcours académique et compétences développées à chaque étape.
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
                                <div className="mt-5">
                                    <h4 className="text-sm font-semibold mb-3">Progression de la Licence</h4>
                                    <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3" aria-label="Années de la Licence">
                                        {formation.niveaux.map((niveau) => (
                                            <li key={niveau.nom} className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
                                                <span className="block text-[var(--accent)] font-bold">{niveau.nom}</span>
                                                <span className="text-sm text-[var(--muted)]">{niveau.date}</span>
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
