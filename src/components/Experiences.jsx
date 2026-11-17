const fallbackExperiences = [
    {
        date: "2026 — en cours",
        poste: "Doctorant en Informatique",
        entreprise: "Université Assane Seck de Ziguinchor",
        missions: ["Recherche sur l'intelligence artificielle frugale et explicable", "Conception de systèmes d'aide à la décision clinique"],
    },
    {
        date: "2026",
        poste: "Ingénieur de recherche — jeu sérieux en logique combinatoire",
        entreprise: "UNCHK",
        missions: ["Conception d'un jeu sérieux pédagogique", "Développement de scénarios interactifs", "Expérimentation auprès des apprenants"],
    },
    {
        date: "2024 – 2025",
        poste: "Développeur Full Stack",
        entreprise: "Direction Informatique et Systèmes d'Information – UASZ",
        missions: ["Développement d'une plateforme de recrutement en ligne", "Développement d'API REST avec Spring Boot et d'interfaces React", "Contribution aux processus CI/CD"],
    },
];

export default function Experience({ content }) {
    const experiences = content?.experiences?.length ? content.experiences : fallbackExperiences;
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
