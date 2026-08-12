import {
    type ChangeEvent,
    type FormEvent,
    useState,
} from "react";
import { motion } from "framer-motion";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import SocialCard from "../components/ui/SocialCard";

import { socialLinks } from "../data/social";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    "bot-field": string;
}

const INITIAL_FORM_DATA: ContactFormData = {
    name: "",
    email: "",
    message: "",
    "bot-field": "",
};

function encodeFormData(data: ContactFormData): string {
    const formData = new URLSearchParams();

    formData.append("form-name", "contact");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("bot-field", data["bot-field"]);

    return formData.toString();
}

function Contact() {
    const [formData, setFormData] =
        useState<ContactFormData>(INITIAL_FORM_DATA);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleChange = (
        event: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        if (status !== "idle") {
            setStatus("idle");
        }
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        setIsSubmitting(true);
        setStatus("idle");

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded",
                },
                body: encodeFormData(formData),
            });

            if (!response.ok) {
                throw new Error(
                    `Form submission failed with status ${response.status}`,
                );
            }

            setFormData(INITIAL_FORM_DATA);
            setStatus("success");
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 md:py-32"
        >
            <Container>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="text-center">
                        <SectionTitle
                            eyebrow="Contact"
                            title="Let's build something meaningful."
                            description="Interested in backend systems, AI applications, or software engineering projects? Feel free to connect."
                        />
                    </div>

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                        }}
                        className="mt-12 flex flex-wrap justify-center gap-4"
                    >
                        {socialLinks.map((link) => (
                            <SocialCard
                                key={link.name}
                                name={link.name}
                                url={link.url}
                                description={
                                    link.description
                                }
                                external={link.external}
                            />
                        ))}
                    </motion.div>

                    <motion.form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                        }}
                        className="mt-12 space-y-6"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                        />

                        <div
                            aria-hidden="true"
                            className="hidden"
                        >
                            <label htmlFor="bot-field">
                                Do not fill this field.
                            </label>

                            <input
                                id="bot-field"
                                name="bot-field"
                                value={formData["bot-field"]}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-left text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-left text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-left text-sm font-medium text-gray-300"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Tell me what you'd like to build..."
                                className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                            />
                        </div>

                        {status === "success" && (
                            <p
                                role="status"
                                className="text-left text-sm text-green-400"
                            >
                                Thanks for reaching out. Your
                                message was sent successfully.
                            </p>
                        )}

                        {status === "error" && (
                            <p
                                role="alert"
                                className="text-left text-sm text-red-400"
                            >
                                Something went wrong while sending
                                your message. Please try again.
                            </p>
                        )}

                        <div className="text-left">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-xl border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>
                        </div>
                    </motion.form>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                        }}
                        className="mt-12 text-center text-sm text-gray-500"
                    >
                        Open to engineering opportunities,
                        collaborations, and interesting technical
                        conversations.
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
}

export default Contact;