import { motion } from "framer-motion";
import { aboutStats } from "../../data/about";

function AboutStats() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
            {aboutStats.map((stat) => (
                <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
                >
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

export default AboutStats;