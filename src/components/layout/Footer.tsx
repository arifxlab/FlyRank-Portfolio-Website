import { motion } from "framer-motion";

import Container from "./Container";
import FooterSocialLink from "../ui/FooterSocialLink";

import { navigationItems } from "../../data/navigation";
import { socialLinks } from "../../data/social";

function Footer() {
    return (
        <footer
            className="border-t border-white/10 py-12 md:py-16"
            aria-label="Footer"
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
                    className="grid gap-12 text-center sm:text-left md:grid-cols-3"
                >
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Arif
                            <span className="text-cyan-400">
                                .
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray-400 sm:mx-0">
                            Backend AI Engineer building scalable systems,
                            intelligent applications, and modern software
                            infrastructure.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Navigation
                        </h3>

                        <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-gray-400 transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    <nav aria-label="Social links">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Connect
                        </h3>

                        <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">
                            {socialLinks.map((link) => (
                                <FooterSocialLink
                                    key={link.name}
                                    name={link.name}
                                    url={link.url}
                                    external={link.external}
                                />
                            ))}
                        </div>
                    </nav>
                </motion.div>

                <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Arif Khan. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;