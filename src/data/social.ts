export interface SocialLink {
    name: string;
    url: string;
    description: string;
    external: boolean;
}

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/arifxlab",
        description: "View my open-source projects and code repositories.",
        external: true,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arif-khan-086a5a405/",
        description: "Connect with me professionally on LinkedIn.",
        external: true,
    },
    {
        name: "Resume",
        url: "/resume.pdf",
        description: "View my professional resume.",
        external: false,
    },
    {
        name: "Booking",
        url: "https://calendar.google.com/calendar/u/0/r",
        description: "Schedule a conversation with me.",
        external: true,
    },
];