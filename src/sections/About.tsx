import Container from "../components/layout/Container";
import AboutCard from "../components/about/AboutCard";
import AboutHighlights from "../components/about/AboutHighlights";
import AboutStats from "../components/about/AboutStats";

function About() {
    return (
        <section
            id="about"
            className="py-24 md:py-32"
        >
            <Container>
                <div className="mx-auto max-w-6xl">
                    <AboutCard />

                    <AboutHighlights />

                    <AboutStats />
                </div>
            </Container>
        </section>
    );
}

export default About;