export interface SkillGroup {
    category: string;
    skills: string[];
    level: "Advanced" | "Intermediate";
    featured: boolean;
}

export const skillGroups: SkillGroup[] = [
    {
        category: "Languages",
        level: "Advanced",
        featured: true,
        skills: [
            "Python",
            "Java",
            "PHP",
            "TypeScript",
        ],
    },
    {
        category: "Backend",
        level: "Advanced",
        featured: true,
        skills: [
            "FastAPI",
            "Spring Boot",
            "Laravel",
            "REST APIs",
            "JWT Authentication",
        ],
    },
    {
        category: "AI Engineering",
        level: "Advanced",
        featured: true,
        skills: [
            "RAG Systems",
            "LLM Applications",
            "AI Agents",
            "Vector Databases",
        ],
    },
    {
        category: "Infrastructure",
        level: "Intermediate",
        featured: true,
        skills: [
            "Docker",
            "PostgreSQL",
            "Redis",
            "Git",
        ],
    },
];