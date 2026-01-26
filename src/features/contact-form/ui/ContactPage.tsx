"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "shared/components/ui/Footer";

export const ContactPage = () => {
    const [alert, setAlert] = useState<
        | { variant: "success"; title: string; description: string }
        | { variant: "error"; title: string; description: string }
        | null
    >(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const form = e.currentTarget;
            const data = new FormData(form);

            const firstName = String(data.get("firstName") ?? "").trim();
            const lastName = String(data.get("lastName") ?? "").trim();
            const email = String(data.get("email") ?? "").trim();
            const message = String(data.get("message") ?? "").trim();

            const to = "isaigonzalez482@gmail.com";
            const subject = `Portfolio contact: ${firstName} ${lastName}`.trim();
            const body = [
                `Name: ${firstName} ${lastName}`.trim(),
                `Email: ${email}`.trim(),
                "",
                message,
            ].join("\n");

            const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoUrl;

            setAlert({
                variant: "success",
                title: "Email listo para enviar",
                description: "Se abrió tu cliente de correo con el mensaje prellenado. Solo presiona enviar.",
            });

            form.reset();
        } catch {
            setAlert({
                variant: "error",
                title: "No se pudo preparar el email",
                description: "Intenta de nuevo o contáctame directamente a isaigonzalez482@gmail.com.",
            });
        }
    };

    return (
        <>
            <div className="min-h-dvh py-10">
                <main className="flex min-h-[calc(100dvh-120px)] flex-col justify-center items-center w-full px-5 sm:px-10 lg:px-14 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full max-w-xl"
                    >
                        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
                            Get in Touch
                        </h1>
                        <p className="text-secondary text-center mb-10">
                            Have a question or want to work together? Drop me a message.
                        </p>
                        {alert ? (
                            <div
                                className={`w-full rounded-lg border p-4 mb-6 ${
                                    alert.variant === "success"
                                        ? "border-foreground/20 bg-snow-white"
                                        : "border-red-500/30 bg-red-50"
                                }`}
                                role="status"
                            >
                                <div className="font-semibold text-foreground">{alert.title}</div>
                                <div
                                    className={`${
                                        alert.variant === "success" ? "text-secondary" : "text-red-700"
                                    } text-sm mt-1`}
                                >
                                    {alert.description}
                                </div>
                            </div>
                        ) : null}

                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="firstName" className="text-sm font-medium">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="John"
                                        className="w-full px-4 py-3 border border-secondary/30 rounded-lg bg-transparent focus:outline-none focus:border-foreground transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="lastName" className="text-sm font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 border border-secondary/30 rounded-lg bg-transparent focus:outline-none focus:border-foreground transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg bg-transparent focus:outline-none focus:border-foreground transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Describe your project or question..."
                                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 mt-2 bg-foreground text-white font-semibold rounded-full hover:bg-secondary transition-colors cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
