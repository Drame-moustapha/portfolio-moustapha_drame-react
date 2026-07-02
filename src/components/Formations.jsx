const fallbackFormations = [
    {
        date: "2025 – 2026 (en cours) ",
        diplome: "Doctorat en Informatique",
        etablissement: "Université Assane Seck de Ziguinchor — Laboratoire d'Informatique et d'Ingénierie pour l'Innovation",
        description: "Recherche sur l'intelligence artificielle frugale, explicable et inclusive pour le dépistage précoce du diabète et l'aide à la décision clinique.",
    },
    {
        date: "2022 – 2024",
        diplome: "Master en Informatique — spécialité Génie Logiciel",
        etablissement: "Université Assane Seck, Ziguinchor",
        description: "",
    },
    {
        date: "2018 – 2021",
        diplome: "Licence en Informatique",
        etablissement: "Université Assane Seck, Ziguinchor",
        description: "",
    },
    {
        date: "2017 – 2018",
        diplome: "Baccalauréat S2",
        etablissement: "Lycée de Djignabo Bassène, Ziguinchor",
        description: "",
    },
];

export default function Formations({ content }) {
    const formations = content?.formations?.length
        ? content.formations
        : fallbackFormations;

    return (
        <section id="formations" className="px-6 py-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Formations</h2>

            <div className="relative border-l border-gray-700 ml-3 space-y-10">
                {formations.map((f, i) => (
                    <div key={i} className="relative pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-info" />

                        <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
                            <p className="text-info text-sm font-semibold">{f.date}</p>

                            <h3 className="text-xl font-semibold mt-1">{f.diplome}</h3>

                            {f.etablissement && (
                                <p className="text-gray-400">{f.etablissement}</p>
                            )}

                            {f.description && (
                                <p className="text-gray-300 mt-3">{f.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}