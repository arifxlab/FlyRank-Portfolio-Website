import { motion } from "framer-motion";
import { heroBadge } from "../../data/hero";

function HeroBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2"
        >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm font-medium text-emerald-300">
                {heroBadge}
            </span>
        </motion.div>
    );
}

export default HeroBadge;