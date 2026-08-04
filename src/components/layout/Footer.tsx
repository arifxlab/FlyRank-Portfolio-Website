import Container from "./Container";

function Footer() {
    return (
        <footer className="border-t border-white/10 py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Arif Khan. All rights reserved.
                    </p>

                    <p>
                        Built with React, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;