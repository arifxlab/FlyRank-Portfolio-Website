export interface AboutHighlight {
    title: string;
    description: string;
}

export interface AboutStat {
    value: string;
    label: string;
}

export const aboutTitle = "About Me";

export const aboutDescription =
    "I'm Arif Khan, a Software Engineering student and Backend AI Engineer focused on building scalable backend systems, AI-powered applications, enterprise APIs, and production-ready software. I enjoy transforming complex problems into clean, maintainable solutions while continuously learning modern technologies and engineering best practices.";

export const aboutHighlights: AboutHighlight[] = [
    {
        title: "Backend Development",
        description:
            "Designing scalable REST APIs and backend architectures using Python, FastAPI, Spring Boot, and Laravel.",
    },
    {
        title: "Artificial Intelligence",
        description:
            "Building AI applications with LLMs, RAG pipelines, AI agents, and vector databases.",
    },
    {
        title: "Production Engineering",
        description:
            "Creating maintainable, documented, containerized, and portfolio-ready software projects.",
    },
];

export const aboutStats: AboutStat[] = [
    {
        value: "15+",
        label: "Projects",
    },
    {
        value: "20+",
        label: "Technologies",
    },
    {
        value: "3+",
        label: "Years Learning",
    },
    {
        value: "∞",
        label: "Curiosity",
    },
];