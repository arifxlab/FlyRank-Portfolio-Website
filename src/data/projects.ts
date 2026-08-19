export interface Project {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    architecture: string;
    category: "AI Engineering" | "Backend Engineering";
    github?: string;
    demo?: string;
    featured: boolean;
    status: "Completed" | "In Progress";
}

export const projects: Project[] = [
    {
        title: "RAGForge",
        description:
            "Enterprise AI Knowledge Engine designed for document ingestion, semantic retrieval, and intelligent question answering.",
        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Qdrant",
            "Docker",
        ],
        highlights: [
            "RAG pipeline architecture",
            "Vector search with Qdrant",
            "Async PostgreSQL backend",
        ],
        architecture:
            "FastAPI API layer backed by PostgreSQL, Redis, Qdrant, and containerized infrastructure.",
        category: "AI Engineering",
        github: "https://github.com/arifxlab/RAGForge",
        demo: "",
        featured: true,
        status: "In Progress",
    },
    {
        title: "Dev Assistant AI",
        description:
            "Production-focused AI code analysis backend that combines AST parsing with LLM-powered review workflows.",
        technologies: [
            "Python",
            "FastAPI",
            "AST",
            "OpenAI",
        ],
        highlights: [
            "AST-based code analysis",
            "Structured AI review pipeline",
            "Backend API architecture",
        ],
        architecture:
            "FastAPI service orchestrating source-code parsing, structured analysis, and LLM-powered review.",
        category: "AI Engineering",
        github: "https://github.com/arifxlab/Dev-Assistant-AI",
        demo: "",
        featured: true,
        status: "Completed",
    },
    {
        title: "CarpeFlow CRM",
        description:
            "Modern CRM platform focused on maintainable business workflows, relational data modeling, and production-ready backend architecture.",
        technologies: [
            "PHP",
            "Laravel",
            "PostgreSQL",
            "Docker",
        ],
        highlights: [
            "RESTful backend architecture",
            "Relational data modeling",
            "Containerized development",
        ],
        architecture:
            "Laravel application layer backed by PostgreSQL and Docker-based infrastructure.",
        category: "Backend Engineering",
        github: "https://github.com/arifxlab/carpeflow-crm",
        demo: "",
        featured: true,
        status: "In Progress",
    },
];