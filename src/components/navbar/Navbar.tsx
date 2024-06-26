import { Car } from "lucide-react";
import { NavProfile } from "./NavProfile";
import { NavLinks } from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavHamburger } from "./NavHamburger";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className="h-16 w-full border-b-2 border-slate-200 absolute bg-[#333333] text-[#F4F4F4]">
        <div className="xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
          <div className="flex flex-row items-center gap-2 cursor-pointer relative lg:hidden pl-4">
            {!visible ? (
              <Menu onClick={() => setVisible((prev) => !prev)} />
            ) : (
              <X onClick={() => setVisible((prev) => !prev)} />
            )}
            <NavHamburger visible={visible} setVisible={setVisible}/>
          </div>

          <div
            onClick={() => navigate("/")}
            className="flex flex-row gap-2 cursor-pointer pl-4"
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
