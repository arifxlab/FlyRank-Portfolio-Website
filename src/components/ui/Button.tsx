import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
}

function Button({
                    children,
                    href,
                    variant = "primary",
                }: ButtonProps) {
    const styles =
        variant === "primary"
            ? "bg-white text-black hover:bg-gray-200"
            : "border border-white/20 text-white hover:bg-white/10";

    const className = `
    inline-flex items-center justify-center
    rounded-full
    px-6 py-3
    text-sm font-medium
    transition
    ${styles}
  `;

    if (href) {
        return (
            <a
                href={href}
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default Button;