import { motion } from "framer-motion";
import { aboutTitle, aboutDescription } from "../../data/about";

function AboutCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
        >
            <h2 className="text-3xl font-bold text-white">
                {aboutTitle}
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
                {aboutDescription}
            </p>
        </motion.div>
    );
}

export default AboutCard;