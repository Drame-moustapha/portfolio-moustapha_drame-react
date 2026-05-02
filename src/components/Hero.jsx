import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6">

            <div className="max-w-xl">
        <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
          Disponible
        </span>

                <h1 className="text-5xl font-bold mt-4">
                    Moustapha Dramé
                </h1>

                <h2 className="text-xl text-gray-400 mt-2">
                    Ingénieur Full Stack & Data / IA
                </h2>

                <p className="mt-4 text-gray-500">
                    Ingénieur en Génie Logiciel spécialisé en Data Science & IA,
                    avec une forte expertise en développement Full Stack et Data Engineering.
                </p>

                <div className="flex gap-3 mt-6">
                    <button className="bg-white text-black px-5 py-2 rounded-xl">
                        Contact
                    </button>
                    <button className="border px-5 py-2 rounded-xl">
                        Projets
                    </button>
                </div>
            </div>

            <motion.img
                src="/images/moustaphaDrame.jpg"
                alt="profile"
                className="w-64 rounded-2xl shadow-xl"
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
            />
        </section>
    );
}