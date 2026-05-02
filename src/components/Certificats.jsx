export default function Certificats() {
    const certificats = [
        {
            title: "Certificat Data Analysis – FORCE-N Sénégal",
            description:
                "Formation en analyse de données : statistiques, nettoyage, visualisation avec Python.",
            image: "/images/Certificat_Data_Analys.png",
            pdf: "/documents/Certificat_Data_Analys.pdf",
        },
        {
            title: "Certificat Cybersécurité – Cisco",
            description:
                "Introduction à la cybersécurité : menaces, vulnérabilités et sécurité réseau.",
            image: "/images/certificat_cisco.png",
            pdf: "/documents/certificat_cisco.pdf",
        },
        {
            title: "Certificat Développeur Full Stack – EDACY",
            description:
                "Formation intensive en développement Full Stack : frontend, backend et gestion de projet.",
            image: "/images/certificat_fullstack.png",
            pdf: "/documents/certificat_fullstack.pdf",
        },
        {
            title: "Certificat Développement Front-End – FORCE-N",
            description:
                "Création d’interfaces web modernes avec HTML, CSS, JavaScript.",
            image: "/images/Certificat_devlopement_F_E.png",
            pdf: "/documents/Certificat_devloppement_F_E.pdf",
        },
    ];

    return (
        <section id="certificats" className="px-6 py-24">
            <h2 className="text-4xl font-bold text-center mb-16">
                Certificats
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {certificats.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
                    >
                        {/* IMAGE */}
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-52 object-cover"
                        />

                        {/* CONTENT */}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">
                                {cert.title}
                            </h3>

                            <p className="text-gray-400 mt-2">
                                {cert.description}
                            </p>

                            {/* ACTIONS */}
                            <div className="flex gap-4 mt-5">
                                <a
                                    href={cert.pdf}
                                    target="_blank"
                                    className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                                >
                                    Voir PDF
                                </a>

                                <a
                                    href={cert.pdf}
                                    download
                                    className="bg-white text-black px-4 py-2 rounded-lg"
                                >
                                    Télécharger
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}