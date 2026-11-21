const unchkExperience = {
    date: "Février 2026 – Mai 2026",
    poste: "STAGIAIRE INGÉNIEUR DE RECHERCHE – Ingénierie pédagogique numérique & Conception de jeux sérieux",
    entreprise: "Université Numérique Cheikh Hamidou Kane (UN-CHK) | Sénégal",
    description: "Projet de recherche-action : Intégration de la pédagogie active dans la scénarisation des cours en ligne à l’UN-CHK. Projet financé par le Fonds FARI/FAP de l’UN-CHK.",
    missions: [
        "Réalisation d’un état de l’art sur les jeux sérieux, la ludification, l’apprentissage de la logique combinatoire, la scénarisation pédagogique et les environnements informatiques pour l’apprentissage humain (EIAH).",
        "Conception et prototypage d’un jeu sérieux dédié à l’apprentissage de la logique combinatoire à l’aide de SCENARI Topaze.",
        "Conception des missions pédagogiques, des niveaux de progression et des mécanismes de rétroaction (feedback).",
        "Participation au déploiement et à l’expérimentation du jeu auprès d’étudiants.",
        "Environnement technique et méthodologique : SCENARI Topaze, ingénierie pédagogique, Serious Games, logique combinatoire, EIAH, pédagogie active, Design-Based Research (DBR), expérimentation et analyse des traces d’apprentissage.",
    ],
};

const fallbackExperiences = [
    {
        date: "2026 — en cours",
        poste: "Doctorant en Informatique",
        entreprise: "Université Assane Seck de Ziguinchor",
        missions: ["Recherche sur l'intelligence artificielle frugale et explicable", "Conception de systèmes d'aide à la décision clinique"],
    },
    unchkExperience,
    {
        date: "2024 – 2025",
        poste: "Développeur Full Stack",
        entreprise: "Direction Informatique et Systèmes d'Information – UASZ",
        missions: ["Développement d'une plateforme de recrutement en ligne", "Développement d'API REST avec Spring Boot et d'interfaces React", "Contribution aux processus CI/CD"],
    },
];

export default function Experience({ content }) {
    const sourceExperiences = content?.experiences?.length ? content.experiences : fallbackExperiences;
    const experiences = sourceExperiences.map((exp) =>
        exp.entreprise === "UNCHK" || exp.entreprise?.includes("UN-CHK") ? unchkExperience : exp
    );
    return (
        <section id="experience" className="content-section section-tinted">
            <div className="section-heading centered-heading">
                <span className="section-kicker">02 / PARCOURS</span>
                <h2>Des idées aux<br /><span>réalisations concrètes.</span></h2>
                <p>Recherche, ingénierie et développement au service de projets à impact.</p>
            </div>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <article className="experience-item" key={`${exp.poste}-${index}`}>
                        <div className="experience-date">{exp.date}</div>
                        <div className="experience-detail">
                            <span className="experience-index">0{index + 1}</span>
                            <div><h3>{exp.poste}</h3>{exp.entreprise && <p className="experience-company">{exp.entreprise}</p>}
                                {exp.description && <p className="experience-description">{exp.description}</p>}
                                {exp.missions?.length > 0 && <ul>{exp.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul>}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
