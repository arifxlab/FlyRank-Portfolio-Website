import Button from "../ui/Button";
import { heroActions } from "../../data/hero";

function HeroActions() {
    return (
        <div className="mt-10 flex flex-wrap gap-4">
            {heroActions.map((action) => (
                <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant}
                >
                    {action.label}
                </Button>
            ))}
        </div>
    );
}

export default HeroActions;