import { Car } from "lucide-react";
import { NavProfile } from "./NavProfile";

export function Navbar() {
  return (
    <>
      <header className="h-16 w-full border-b-2 border-slate-200 px-4">
        <div className="xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
          <div className="flex flex-row gap-2">
            <Car />
            <p>CarScout</p>
          </div>
            <NavProfile />
        </div>
      </header>
    </>
  );
}
