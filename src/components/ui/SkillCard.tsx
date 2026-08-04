import { motion } from "framer-motion";

interface SkillCardProps {
    category: string;
    skills: string[];
    level: "Advanced" | "Intermediate";
    featured: boolean;
}

function SkillCard({
                       category,
                       skills,
                       level,
                       featured,
                   }: SkillCardProps) {
    return (
        <motion.article
            whileHover={{
                y: -8,
                scale: 1.01,
            }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08]"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
                        level === "Advanced"
                            ? "bg-emerald-500/10 text-emerald-300"
                            : "bg-amber-500/10 text-amber-300"
                    }`}
                >
                    {level}
                </span>
            </div>

            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                {category}
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li key={skill}>
                        <span
                            className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                        >
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.article>
    );
}

export default SkillCard;