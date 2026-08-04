export interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        title: "RAGForge",
        description:
            "Enterprise AI Knowledge Engine built with FastAPI, PostgreSQL, Qdrant, and Redis.",
        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Qdrant",
            "Redis",
        ],
    },
    {
        title: "Dev Assistant AI",
        description:
            "AI-powered code analysis backend using AST processing for intelligent code review.",
        technologies: [
            "Python",
            "FastAPI",
            "AST",
            "AI",
        ],
    },
    {
        title: "CarpeFlow CRM",
        description:
            "Business CRM platform designed with Laravel and PostgreSQL.",
        technologies: [
            "PHP",
            "Laravel",
            "PostgreSQL",
        ],
    },
];