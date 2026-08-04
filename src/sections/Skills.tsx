import { motion } from "framer-motion";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import SkillCard from "../components/ui/SkillCard";

import { skillGroups } from "../data/skills";

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

function Skills() {
    return (
        <section
            id="skills"
            className="py-24 md:py-32"
        >
            <Container>
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        eyebrow="Skills"
                        title="Technologies I Work With"
                        description="Backend engineering, AI systems, cloud infrastructure, and modern development tools I use to build production-ready software."
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-16 grid gap-8 md:grid-cols-2"
                    >
                        {skillGroups.map((group) => (
                            <motion.div
                                key={group.category}
                                variants={itemVariants}
                            >
                                <SkillCard
                                    category={group.category}
                                    skills={group.skills}
                                    level={group.level}
                                    featured={group.featured}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

export default Skills;