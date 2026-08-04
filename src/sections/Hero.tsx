import { motion } from "framer-motion";

import Container from "../components/layout/Container";

import HeroBadge from "../components/hero/HeroBadge";
import HeroActions from "../components/hero/HeroActions";
import HeroTechStack from "../components/hero/HeroTechStack";
import HeroStats from "../components/hero/HeroStats";

import {
    heroTitle,
    heroDescription,
} from "../data/hero";

function Hero() {
    return (
        <section className="flex min-h-screen items-center pt-20">
            <Container>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mx-auto max-w-5xl"
                >
                    <HeroBadge />

                    <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                        {heroTitle}
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
                        {heroDescription}
                    </p>

                    <HeroActions />

                    <HeroTechStack />

                    <HeroStats />
                </motion.div>
            </Container>
        </section>
    );
}

export default Hero;