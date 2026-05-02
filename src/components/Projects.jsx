const projects = [
    {
        title: "Plateforme de recrutement",
        desc: "Gestion des recrutements académiques",
        tech: ["Spring Boot", "React"]
    },
    {
        title: "Analyse Big Data médias",
        desc: "Scraping + ETL + Cassandra",
        tech: ["Python", "Cassandra"]
    },
    {
        title: "LSTM Prediction",
        desc: "Modélisation de données séquentielles",
        tech: ["TensorFlow", "Keras"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-20">
            <h2 className="text-3xl mb-10">Projets</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <div key={i} className="bg-gray-900 p-5 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.desc}</p>

                        <div className="flex gap-2 mt-3 flex-wrap">
                            {p.tech.map((t, i) => (
                                <span key={i} className="bg-gray-700 px-2 py-1 text-sm rounded">
                  {t}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}