import { heroTechStack } from "../../data/hero";

function HeroTechStack() {
    return (
        <div className="mt-8 flex flex-wrap gap-3">
            {heroTechStack.map((technology) => (
                <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                    {technology}
                </span>
            ))}
        </div>
    );
}

export default HeroTechStack;