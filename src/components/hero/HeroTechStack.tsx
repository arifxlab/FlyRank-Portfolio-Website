import { motion } from "framer-motion";
import { heroTechStack } from "../../data/hero";

function HeroTechStack() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
        >
            {heroTechStack.map((technology) => (
                <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                    {technology}
                </span>
            ))}
        </motion.div>
    );
}

export default HeroTechStack;