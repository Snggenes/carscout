import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export function NavLinks() {
  return (
    <div className="hidden lg:flex flex-row gap-2">
        <Button variant="link" className="text-[#F4F4F4]" asChild>
            <Link to="/">Search</Link>
        </Button>
        <Button variant="link" className="text-[#F4F4F4]" asChild>
            <Link to="/sell">Sell</Link>
        </Button>
        <Button variant="link" className="text-[#F4F4F4]" asChild>
            <Link to="/magazine">Magazine</Link>
        </Button>
        <Button variant="link" className="text-[#F4F4F4]" asChild>
            <Link to="/subscription">Subscription</Link>
        </Button>
    </div>
  );
}