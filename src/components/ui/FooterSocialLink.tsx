interface FooterSocialLinkProps {
    name: string;
    url: string;
    external: boolean;
}

function FooterSocialLink({
                              name,
                              url,
                              external,
                          }: FooterSocialLinkProps) {
    return (
        <a
            href={url}
            target={external ? "_blank" : undefined}
            rel={
                external
                    ? "noopener noreferrer"
                    : undefined
            }
            className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-300 focus:outline-none focus:text-cyan-300"
        >
            <span>
                {name}
            </span>

            {external && (
                <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                </span>
            )}
        </a>
    );
}

export default FooterSocialLink;