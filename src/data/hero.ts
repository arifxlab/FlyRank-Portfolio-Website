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
    "Available for Backend AI Engineering Opportunities";

export const heroTitle =
    "Building scalable backend systems and intelligent AI applications.";

export const heroDescription =
    "I build production-focused backend systems, AI applications, APIs, enterprise software, and intelligent infrastructure using modern engineering practices.";

export const heroTechStack = [
    "Python",
    "FastAPI",
    "Spring Boot",
    "Laravel",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Qdrant",
    "AI Agents",
    "RAG",
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
        value: "3+",
        label: "Years Learning",
    },
    {
        value: "15+",
        label: "Projects Built",
    },
    {
        value: "20+",
        label: "Technologies",
    },
    {
        value: "100%",
        label: "Production Mindset",
    },
];