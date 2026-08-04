import { motion } from "framer-motion";
import { aboutHighlights } from "../../data/about";

function AboutHighlights() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 grid gap-6 md:grid-cols-3"
        >
            {aboutHighlights.map((highlight) => (
                <div
                    key={highlight.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
                >
                    <h3 className="text-xl font-semibold text-white">
                        {highlight.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                        {highlight.description}
                    </p>
                </div>
            ))}
        </motion.div>
    );
}

export default AboutHighlights;