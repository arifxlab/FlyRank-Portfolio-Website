import { motion } from "framer-motion";
import Button from "../ui/Button";
import { heroActions } from "../../data/hero";

function HeroActions() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
        >
            {heroActions.map((action) => (
                <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant}
                >
                    {action.label}
                </Button>
            ))}
        </motion.div>
    );
}

export default HeroActions;