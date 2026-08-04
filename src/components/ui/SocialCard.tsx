import { motion } from "framer-motion";

interface SocialCardProps {
    name: string;
    url: string;
    description: string;
    external: boolean;
}

function SocialCard({
                        name,
                        url,
                        description,
                        external,
                    }: SocialCardProps) {
    return (
        <motion.a
            href={url}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={description}
            whileHover={{
                y: -5,
                scale: 1.02,
            }}
            transition={{
                duration: 0.2,
            }}
            className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
        >
            <span className="flex items-center gap-2">
                {name}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {external ? "↗" : "↓"}
                </span>
            </span>
        </motion.a>
    );
}

export default SocialCard;