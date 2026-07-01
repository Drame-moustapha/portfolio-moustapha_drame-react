const fallbackSkills = [
    {
        title: "Développement logiciel",
        items: ["Java", "Spring Boot", "React.js", "Angular", "API REST", "Architecture Microservices"],
    },
    {
        title: "Data & Intelligence Artificielle",
        items: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras", "PyTorch", "Scikit-learn"],
    },
    {
        title: "Bases de données",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
        title: "DevOps",
        items: ["Git", "Docker", "Jenkins", "CI/CD", "GitLab"],
    },
];

export default function Skills({ content }) {
    const skills = content?.skills?.length ? content.skills : fallbackSkills;

    return (
        <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Compétences</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((group, i) => (
                    <div key={i} className="bg-gray-900 p-5 rounded-xl hover:bg-gray-800 transition">
                        <h3 className="font-semibold text-info mb-3">{group.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item, j) => (
                                <span
                                    key={j}
                                    className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
