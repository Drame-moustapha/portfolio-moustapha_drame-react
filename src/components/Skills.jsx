const fallbackSkills = [
    { title: "Développement logiciel", intro: "Concevoir et livrer des applications robustes.", items: ["Java", "Spring Boot", "React.js", "Angular", "API REST", "Node.js", "Microservices"] },
    { title: "Intelligence artificielle & data", intro: "Explorer les données et construire des modèles utiles.", items: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Big Data"] },
    { title: "Données & bases", intro: "Structurer, exploiter et valoriser l'information.", items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Statistiques avec R"] },
    { title: "Outils & méthodes", intro: "Travailler avec méthode, qualité et collaboration.", items: ["Git", "Docker", "Jenkins", "CI/CD", "GitLab", "Réseaux"] },
];

export default function Skills({ content }) {
    const skills = content?.skills?.length ? content.skills : fallbackSkills;
    return (
        <section id="skills" className="content-section skills-section">
            <div className="section-heading centered-heading">
                <span className="section-kicker">04 / EXPERTISE</span>
                <h2>Un profil <span>pluridisciplinaire.</span></h2>
                <p>Des compétences complémentaires pour faire avancer des projets de bout en bout.</p>
            </div>
            <div className="skills-grid">
                {skills.map((group, index) => (
                    <article className="skill-card" key={group.title}>
                        <span className="skill-number">0{index + 1}</span>
                        <h3>{group.title}</h3>
                        {group.intro && <p>{group.intro}</p>}
                        <ul className="tag-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
