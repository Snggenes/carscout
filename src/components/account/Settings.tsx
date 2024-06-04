import { SettingsLayout } from "./SettingsLayout";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function Settings() {
  const location = useLocation();
  return (
    <div className="pt-20 lg:pt-36 w-full flex flex-col justify-center items-center">
      {location.pathname === "/account/settings" ? <SettingsLayout /> : null}
      <Outlet />
    </div>
  );
}
