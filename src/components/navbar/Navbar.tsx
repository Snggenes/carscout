import { Car } from "lucide-react";
import { NavProfile } from "./NavProfile";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="h-16 w-full border-b-2 border-slate-200 px-4">
        <div className="xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
          <div
            onClick={() => navigate("/")}
            className="flex flex-row gap-2 cursor-pointer"
          >
            <Car />
            <p>CarScout</p>
          </div>
          <NavProfile />
        </div>
      </header>
    </>
  );
}
