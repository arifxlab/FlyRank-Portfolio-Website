import { motion } from "framer-motion";

import Container from "../components/layout/Container";
import ProjectCard from "../components/ui/ProjectCard";
import SectionTitle from "../components/ui/SectionTitle";

import { projects } from "../data/projects";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Projects() {
    return (
        <section
            id="projects"
            className="py-24 md:py-32"
        >
            <Container>
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        eyebrow="Projects"
                        title="Things I've Built"
                        description="A collection of backend systems, AI applications, enterprise APIs, and production-ready software engineering projects."
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    highlights={project.highlights}
                                    architecture={project.architecture}
                                    category={project.category}
                                    github={project.github}
                                    demo={project.demo}
                                    featured={project.featured}
                                    status={project.status}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

export default Projects;