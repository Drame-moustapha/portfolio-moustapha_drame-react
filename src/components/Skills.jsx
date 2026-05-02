export default function Skills() {
    return (
        <section id="skills" className="px-6 py-20">
            <h2 className="text-3xl mb-10">Compétences</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900 p-5 rounded-xl">
                    <h3>Data Science</h3>
                    <p>Python, Pandas, TensorFlow</p>
                </div>

                <div className="bg-gray-900 p-5 rounded-xl">
                    <h3>Backend</h3>
                    <p>Spring Boot, Node.js</p>
                </div>

                <div className="bg-gray-900 p-5 rounded-xl">
                    <h3>Frontend</h3>
                    <p>React, Angular</p>
                </div>
            </div>
        </section>
    );
}