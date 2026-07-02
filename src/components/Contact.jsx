import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiGithub,FiLinkedin, FiMail, FiSend } from "react-icons/fi";

//  À remplacer par tes identifiants EmailJS (https://www.emailjs.com/ → Email Services / Email Templates / Account)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const CONTACT_EMAIL = "drame779576559@gmail.com";

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

    const onSubmit = async (data) => {
        setStatus("sending");
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );
            setStatus("success");
            reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="px-6 py-20 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-400 mb-10">
                Une question, une opportunité de collaboration ou de recherche ?
                N'hésitez pas à me contacter.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2 bg-info text-black font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition"
                >
                    <FiMail/> {CONTACT_EMAIL}
                </a>
                <a
                    href="https://github.com/Drame-moustapha"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-gray-600 px-5 py-2.5 rounded-lg hover:bg-white/10 transition"
                >
                    <FiGithub/> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/moustaphadramekandji/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-gray-600 px-5 py-2.5 rounded-lg hover:bg-white/10 transition"
                >
                    <FiLinkedin /> LinkedIn
                </a>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-900 rounded-2xl p-8 text-left space-y-5"
            >
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Nom</label>
                    <input
                        {...register("name", {required: "Ton nom est requis" })}
                        className="w-full bg-gray-800 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-info"
                        placeholder="Ton nom"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Ton email est requis",
                            pattern: { value: /^\S+@\S+$/i, message: "Email invalide" },
                        })}
                        className="w-full bg-gray-800 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-info"
                        placeholder="ton.email@exemple.com"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-400 mb-1">Message</label>
                    <textarea
                        rows={4}
                        {...register("message", { required: "Un message est requis" })}
                        className="w-full bg-gray-800 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-info"
                        placeholder="Ton message..."
                    />
                    {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center gap-2 justify-center w-full bg-info text-black font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                    <FiSend />
                    {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {status === "success" && (
                    <p className="text-green-400 text-sm text-center">
                        Message envoyé avec succès, merci !
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-400 text-sm text-center">
                        Une erreur est survenue. Écris-moi directement à {CONTACT_EMAIL}.
                    </p>
                )}
            </form>
        </section>
    );
}
