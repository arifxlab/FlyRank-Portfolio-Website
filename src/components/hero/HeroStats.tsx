import { motion } from "framer-motion";
import { heroStats } from "../../data/hero";

function HeroStats() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4"
        >
            {heroStats.map((stat) => (
                <div key={stat.label}>
                    <h3 className="text-3xl font-bold text-white">
                        {stat.value}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                        {stat.label}
                    </p>
                </div>
            ))}
        </motion.div>
    );
}

export default HeroStats;