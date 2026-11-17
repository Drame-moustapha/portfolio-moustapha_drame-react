import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "Plateforme de recrutement académique",
        desc: "Application web réalisée pour la DISI de l'UASZ afin de digitaliser et centraliser la gestion des campagnes de recrutement académique.",
        tech: ["Spring Boot", "React", "API REST", "CI/CD"],
        github: "https://github.com/Drame-moustapha",
        number: "01",
    },
    {
        title: "Analyse Big Data de médias",
        desc: "Pipeline de collecte et de traitement de données à grande échelle, avec transformation ETL et stockage distribué pour faciliter l'analyse des contenus.",
        tech: ["Python", "Cassandra", "ETL"],
        github: "https://github.com/Drame-moustapha",
        number: "02",
    },
    {
        title: "Prédiction par réseau LSTM",
        desc: "Modèle de deep learning appliqué à des données séquentielles et séries temporelles, de l'entraînement à l'évaluation des prédictions.",
        tech: ["TensorFlow", "Keras", "Python"],
        github: "https://github.com/Drame-moustapha",
        number: "03",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="content-section projects-section">
            <div className="section-heading project-heading">
                <div><span className="section-kicker">03 / SÉLECTION</span><h2>Projets &amp;<br /><span>réalisations.</span></h2></div>
                <p>Quelques projets à l’intersection du logiciel, de la donnée et de l’intelligence artificielle.</p>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-card-top"><span>{project.number} / 03</span><FiArrowUpRight aria-hidden="true" /></div>
                        <div className="project-mark" aria-hidden="true">{project.number === "01" ? "⌘" : project.number === "02" ? "▥" : "∿"}</div>
                        <h3>{project.title}</h3><p>{project.desc}</p>
                        <ul className="tag-list">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                        <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> Voir les projets GitHub <FiExternalLink aria-hidden="true" /></a>
                    </article>
                ))}
            </div>
        </section>
    );
}
