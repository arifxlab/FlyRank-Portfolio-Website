interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

function ProjectCard({
                         title,
                         description,
                         technologies,
                         github,
                         demo,
                     }: ProjectCardProps) {
    return (
        <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
            <h3 className="text-xl font-semibold text-white">
                {title}
            </h3>

            <p className="mt-3 text-gray-400">
                {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                    >
            {technology}
          </span>
                ))}
            </div>

            <div className="mt-6 flex gap-4">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        GitHub
                    </a>
                )}

                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;