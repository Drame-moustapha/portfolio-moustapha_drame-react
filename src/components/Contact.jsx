import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const CONTACT_EMAIL = "drame779576559@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const hasEmailJsConfig = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [status, setStatus] = useState(null);

    const onSubmit = async ({ name, email, message }) => {
        setStatus("sending");
        if (hasEmailJsConfig) {
            try {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    { from_name: name, from_email: email, reply_to: email, message },
                    { publicKey: EMAILJS_PUBLIC_KEY },
                );
                setStatus("success");
                reset();
                return;
            } catch (error) {
                console.error("Échec de l'envoi EmailJS :", error);
                setStatus("fallback");
            }
        } else {
            setStatus("fallback");
        }

        const subject = encodeURIComponent(`Message du portfolio — ${name}`);
        const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const inputClass = "w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

    return (
        <section id="contact" className="px-6 py-20 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-[var(--muted)] mb-10">
                Une question, une opportunité de collaboration ou de recherche ? N'hésitez pas à me contacter.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 btn-primary font-semibold px-5 py-2.5 rounded-lg">
                    <FiMail aria-hidden="true" /> {CONTACT_EMAIL}
                </a>
                <a href="https://github.com/Drame-moustapha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 btn px-5 py-2.5 rounded-lg">
                    <FiGithub aria-hidden="true" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/moustaphadramekandji/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 btn px-5 py-2.5 rounded-lg">
                    <FiLinkedin aria-hidden="true" /> LinkedIn
                </a>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="card p-6 sm:p-8 text-left space-y-5">
                <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-1">Nom</label>
                    <input
                        id="contact-name"
                        autoComplete="name"
                        {...register("name", { required: "Ton nom est requis", minLength: { value: 2, message: "Le nom doit contenir au moins 2 caractères." } })}
                        className={inputClass}
                        placeholder="Ton nom"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && <p id="contact-name-error" role="alert" className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        {...register("email", {
                            required: "Ton email est requis",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Saisis une adresse email valide." },
                        })}
                        className={inputClass}
                        placeholder="ton.email@exemple.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && <p id="contact-email-error" role="alert" className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        id="contact-message"
                        rows={5}
                        {...register("message", { required: "Un message est requis", minLength: { value: 10, message: "Le message doit contenir au moins 10 caractères." } })}
                        className={inputClass}
                        placeholder="Ton message..."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && <p id="contact-message-error" role="alert" className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={status === "sending"} className="flex items-center gap-2 justify-center w-full btn-primary font-semibold px-5 py-3 rounded-lg disabled:opacity-50">
                    <FiSend aria-hidden="true" />
                    {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
                </button>
                <p aria-live="polite" className="text-sm text-center">
                    {status === "success" && <span className="text-green-600">Message envoyé avec succès, merci !</span>}
                    {status === "fallback" && <span className="text-[var(--muted)]">Votre application de messagerie va s'ouvrir avec votre message prêt à envoyer. Si elle ne s'ouvre pas, écrivez à <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</span>}
                </p>
            </form>
        </section>
    );
}
