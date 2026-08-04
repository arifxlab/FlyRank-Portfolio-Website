export interface SkillGroup {
    category: string;
    skills: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        category: "Languages",
        skills: [
            "Python",
            "Java",
            "PHP",
            "TypeScript",
        ],
    },
    {
        category: "Backend",
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
        skills: [
            "RAG Systems",
            "LLM Applications",
            "AI Agents",
            "Vector Databases",
        ],
    },
    {
        category: "Infrastructure",
        skills: [
            "Docker",
            "PostgreSQL",
            "Redis",
            "Git",
        ],
    },
];