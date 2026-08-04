import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { skillGroups } from "../data/skills";

function Skills() {
    return (
        <section
            id="skills"
            className="py-24"
        >
            <Container>
                <SectionTitle
                    eyebrow="Skills"
                    title="Technologies I work with."
                    description="A backend and AI focused engineering toolkit."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.category}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <h3 className="text-xl font-semibold text-white">
                                {group.category}
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Skills;