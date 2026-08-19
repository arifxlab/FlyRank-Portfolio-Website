export interface HeroStat {
    value: string;
    label: string;
}

export interface HeroAction {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
}

export const heroBadge =
    "Backend AI Engineer • AI Systems • Backend Infrastructure";

export const heroTitle =
    "Building scalable backend systems and intelligent AI applications.";

export const heroDescription =
    "I design and build production-focused backend systems, AI applications, enterprise APIs, and intelligent infrastructure with Python, FastAPI, Spring Boot, Laravel, PostgreSQL, and modern AI tooling.";

export const heroTechStack = [
    "Python",
    "FastAPI",
    "Spring Boot",
    "Laravel",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Qdrant",
    "RAG",
    "AI Agents",
    "TypeScript",
];

export const heroActions: HeroAction[] = [
    {
        label: "Explore Projects",
        href: "#projects",
        variant: "primary",
    },
    {
        label: "Download Resume",
        href: "/resume.pdf",
        variant: "secondary",
    },
];

export const heroStats: HeroStat[] = [
    {
        value: "15+",
        label: "Projects Built",
    },
    {
        value: "3",
        label: "Backend Stacks",
    },
    {
        value: "4",
        label: "AI System Areas",
    },
    {
        value: "100%",
        label: "Production Mindset",
    },
];