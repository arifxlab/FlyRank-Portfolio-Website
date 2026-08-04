import { motion } from "framer-motion";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import SocialCard from "../components/ui/SocialCard";

import { socialLinks } from "../data/social";

function Contact() {
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
                    className="mx-auto max-w-4xl text-center"
                >
                    <SectionTitle
                        eyebrow="Contact"
                        title="Let's build something meaningful."
                        description="Interested in backend systems, AI applications, or software engineering projects? Feel free to connect."
                    />

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
                                description={link.description}
                                external={link.external}
                            />
                        ))}
                    </motion.div>

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
                        className="mt-12 text-sm text-gray-500"
                    >
                        Open to engineering opportunities, collaborations,
                        and interesting technical conversations.
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
}

export default Contact;