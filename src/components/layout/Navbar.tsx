import Container from "./Container";

const navigation = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    <a
                        href="/"
                        className="text-xl font-bold tracking-tight"
                    >
                        Arif Khan
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm text-gray-300 transition hover:text-white"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Navbar;