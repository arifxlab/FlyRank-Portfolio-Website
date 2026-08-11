export interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    featured: boolean;
    status: "Completed" | "In Progress";
}

export const projects: Project[] = [
    {
        title: "RAGForge",
        description:
            "Enterprise AI Knowledge Engine built with FastAPI, PostgreSQL, Qdrant, Redis, Docker, and Retrieval-Augmented Generation.",
        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Qdrant",
            "Docker",
        ],
        github: "https://github.com/arifxlab/RAGForge",
        demo: "",
        featured: true,
        status: "In Progress",
    },
    {
        title: "Dev Assistant AI",
        description:
            "Production-focused AI code analysis backend using AST parsing, FastAPI, and intelligent review pipelines.",
        technologies: [
            "Python",
            "FastAPI",
            "AST",
            "OpenAI",
        ],
        github: "https://github.com/arifxlab/Dev-Assistant-AI",
        demo: "",
        featured: true,
        status: "Completed",
    },
    {
        title: "CarpeFlow CRM",
        description:
            "Modern CRM platform built with Laravel, PostgreSQL, Docker, and enterprise backend architecture.",
        technologies: [
            "PHP",
            "Laravel",
            "PostgreSQL",
            "Docker",
        ],
        github: "https://github.com/arifxlab/carpeflow-crm",
        demo: "",
        featured: true,
        status: "In Progress",
    },
];