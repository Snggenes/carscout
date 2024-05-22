import { Car } from "lucide-react";
import { NavProfile } from "./NavProfile";
import { NavLinks } from "./NavLinks";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="h-16 w-full border-b-2 border-slate-200 px-4 absolute bg-[#333333] text-[#F4F4F4]">
        <div className="xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
          <div
            onClick={() => navigate("/")}
            className="flex flex-row gap-2 cursor-pointer"
          >
            <Car />
            <p>CarScout</p>
          </div>
          <NavLinks />
          <NavProfile />
        </div>
      </header>
    </>
  );
}
