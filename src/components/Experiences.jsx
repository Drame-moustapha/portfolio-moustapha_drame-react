export default function Experience() {
    return (
        <section id="experience" className="px-6 py-20">
            <h2 className="text-3xl mb-10">Expériences</h2>

            <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold">
                    Développeur Full-Stack Java / React
                </h3>

                <p className="text-gray-400">
                    Université Assane Seck – 2024 – 2025
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                    <li>✔ Plateforme de recrutement académique</li>
                    <li>✔ API REST sécurisées (Spring Boot)</li>
                    <li>✔ Frontend React</li>
                    <li>✔ CI/CD GitLab</li>
                </ul>
            </div>
        </section>
    );
}