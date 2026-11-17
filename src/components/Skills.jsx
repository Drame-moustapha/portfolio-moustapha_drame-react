const fallbackSkills = [
    {
        title: "Recherche & Intelligence Artificielle",
        intro: "Développement de modèles intelligents, d'outils décisionnels et d'approches explications orientées données.",
        items: [
            "Machine Learning",
            "Deep Learning",
            "Python",
            "TensorFlow",
            "Keras",
            "PyTorch",
            "Scikit-learn",
            "IA explicable",
            "Analyse prédictive",
            "Aide à la décision",
        ],
    },
    {
        title: "Développement logiciel",
        intro: "Conception, développement et maintenance d'applications robustes et évolutives pour le web et les services.",
        items: [
            "Java",
            "Spring Boot",
            "React.js",
            "Angular",
            "Node.js",
            "API REST",
            "Microservices",
            "JavaScript",
            "TypeScript",
            "Architecture logicielle",
        ],
    },
    {
        title: "Data, bases & analyse",
        intro: "Structuration, traitement et valorisation des données pour le pilotage des décisions et des systèmes d'information.",
        items: [
            "Python pour la data",
            "Analyse de données",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Oracle",
            "Statistiques",
            "Réseaux de données",
            "ETL",
            "Big Data",
        ],
    },
    {
        title: "Outils, méthodes & collaboration",
        intro: "Travail structuré, qualité logicielle et mise en œuvre de solutions avec une approche professionnelle et collaborative.",
        items: [
            "Git",
            "GitLab",
            "Docker",
            "CI/CD",
            "Jenkins",
            "Linux/Unix",
            "Gestion de projet",
            "Tests logiciels",
            "Documentation technique",
            "Méthodes agiles",
        ],
    },
];

export default function Skills({ content }) {
    const skills = content?.skills?.length ? content.skills : fallbackSkills;

    return (
        <section id="skills" className="content-section skills-section">
            <div className="section-heading centered-heading">
                <span className="section-kicker">04 / EXPERTISE</span>
                <h2>
                    Un profil <span>pluridisciplinaire.</span>
                </h2>
                <p>
                    Des compétences solides à la croisée du développement, de la donnée et de l’intelligence artificielle.
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((group, index) => (
                    <article className="skill-card" key={group.title || index}>
                        <span className="skill-number">0{index + 1}</span>
                        <h3>{group.title}</h3>
                        {group.intro && <p>{group.intro}</p>}
                        <ul className="tag-list">
                            {group.items.map((item) => (
                                <li key={`${group.title}-${item}`}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
