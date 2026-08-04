import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    featured: boolean;
    status: "Completed" | "In Progress";
}

function ProjectCard({
                         title,
                         description,
                         technologies,
                         github,
                         demo,
                         featured,
                         status,
                     }: ProjectCardProps) {
    return (
        <motion.article
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-cyan-500/10"
        >
            <div className="mb-6 flex items-center justify-between">
                {featured ? (
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                        Featured
                    </span>
                ) : (
                    <span />
                )}

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        status === "Completed"
                            ? "bg-emerald-500/10 text-emerald-300"
                            : "bg-amber-500/10 text-amber-300"
                    }`}
                >
                    {status}
                </span>
            </div>

            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                {title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-gray-400">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex gap-6 border-t border-white/10 pt-6">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} source code on GitHub`}
                        className="font-medium text-cyan-400 transition-all duration-300 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        GitHub ↗
                    </a>
                )}

                {demo && demo.trim() !== "" && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo for ${title}`}
                        className="font-medium text-cyan-400 transition-all duration-300 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Live Demo ↗
                    </a>
                )}
            </div>
        </motion.article>
    );
}

export default ProjectCard;