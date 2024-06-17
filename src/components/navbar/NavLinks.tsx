import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export function NavLinks() {
  return (
    <div className="hidden lg:flex flex-row gap-5">
      <Button variant="ghost" className="text-[#F4F4F4] text-base hover:bg-white hover:text-black transition duration-500" asChild>
        <Link to="/">Search</Link>
      </Button>
      <Button variant="ghost" className="text-[#F4F4F4] text-base hover:bg-white hover:text-black transition duration-500" asChild>
        <Link to="/sell">Sell</Link>
      </Button>
      <Button variant="ghost" className="text-[#F4F4F4] text-base hover:bg-white hover:text-black transition duration-500" asChild>
        <Link to="/magazine">Magazine</Link>
      </Button>
      <Button variant="ghost" className="text-[#F4F4F4] text-base hover:bg-white hover:text-black transition duration-500" asChild>
        <Link to="/subscription">Subscription</Link>
      </Button>
      <Button variant="ghost" className="text-[#F4F4F4] text-base hover:bg-white hover:text-black transition duration-500" asChild>
        <Link to="/financial-lease">Financial Lease</Link>
      </Button>
    </div>
  );
}
