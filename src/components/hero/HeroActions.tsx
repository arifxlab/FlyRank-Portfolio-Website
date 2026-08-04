import Button from "../ui/Button";

function HeroActions() {
    return (
        <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
                Explore Projects
            </Button>

            <Button
                href="/resume.pdf"
                variant="secondary"
            >
                Download Resume
            </Button>
        </div>
    );
}

export default HeroActions;