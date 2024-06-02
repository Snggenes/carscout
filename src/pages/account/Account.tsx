import { Outlet } from "react-router-dom";
import { AccountLayout } from "../../components/AccountLayout";
import { AccountSidebar } from "@/components/AccountSidebar";
import { useLocation } from 'react-router-dom';

export default function Account() {
  const location = useLocation();
  return (
    <div className="pt-16 w-full flex flex-col items-center">
      <div className="min-h-screen w-full max-w-[1200px] grid grid-cols-7 gap-4">
        <div className="w-full hidden lg:block lg:col-span-2">
          <AccountSidebar />
        </div>
        <div className="w-full col-span-7 lg:col-span-5">
          {location.pathname === "/account" ? <AccountLayout /> : null}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
