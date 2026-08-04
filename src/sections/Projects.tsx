import Container from "../components/layout/Container";
import ProjectCard from "../components/ui/ProjectCard";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../data/projects";

function Projects() {
    return (
        <section
            id="projects"
            className="py-24"
        >
            <Container>
                <SectionTitle
                    eyebrow="Projects"
                    title="Things I have built."
                    description="A collection of backend systems, AI applications,
          and software engineering projects."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            github={project.github}
                            demo={project.demo}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Projects;