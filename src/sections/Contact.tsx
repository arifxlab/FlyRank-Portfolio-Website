import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { socialLinks } from "../data/social";

function Contact() {
    return (
        <section
            id="contact"
            className="py-24"
        >
            <Container>
                <SectionTitle
                    eyebrow="Contact"
                    title="Let's build something meaningful."
                    description="Interested in backend systems, AI applications, or software engineering projects? Feel free to connect."
                />

                <div className="mt-10 flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Contact;