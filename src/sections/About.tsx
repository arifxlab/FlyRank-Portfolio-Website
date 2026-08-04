import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

function About() {
    return (
        <section
            id="about"
            className="py-24"
        >
            <Container>
                <SectionTitle
                    eyebrow="About Me"
                    title="Building software systems with engineering depth."
                    description="My focus is backend engineering, artificial intelligence,
          and scalable system design."
                />

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold text-white">
                            Engineering Focus
                        </h3>

                        <p className="mt-4 text-gray-400">
                            I build backend platforms, AI-powered applications,
                            and developer tools using technologies like Python,
                            Java, FastAPI, Spring Boot, Laravel, PostgreSQL,
                            Docker, and modern AI infrastructure.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold text-white">
                            Development Philosophy
                        </h3>

                        <p className="mt-4 text-gray-400">
                            I believe strong software comes from clean architecture,
                            maintainable code, thoughtful system design, and solving
                            real-world problems through technology.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;