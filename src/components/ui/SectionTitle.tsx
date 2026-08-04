interface SectionTitleProps {
    eyebrow: string;
    title: string;
    description?: string;
}

function SectionTitle({
                          eyebrow,
                          title,
                          description,
                      }: SectionTitleProps) {
    return (
        <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
                {eyebrow}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-gray-400">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;