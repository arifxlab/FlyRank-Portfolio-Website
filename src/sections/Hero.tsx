import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const highlights = [
    "AI Engineering",
    "Backend Systems",
    "Distributed Architecture",
];

function Hero() {
    return (
        <section className="flex min-h-screen items-center pt-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
                        Backend AI Engineer
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
                        Building scalable backend systems and intelligent AI applications.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-gray-400">
                        I build production-focused software systems, AI applications,
                        and backend infrastructure with modern engineering practices.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {highlights.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                            >
                {item}
              </span>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button href="#projects">
                            View Projects
                        </Button>

                        <Button
                            href="#contact"
                            variant="secondary"
                        >
                            Contact Me
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

export default Hero;