import { Outlet } from "react-router-dom";
import { AccountLayout } from "../../components/account/AccountLayout";
import { AccountSidebar } from "@/components/account/AccountSidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/userContext";
import { useEffect } from "react";

export default function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user?.username) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="pt-16 w-full flex flex-col items-center">
      <h1 className="block lg:hidden absolute left-5 top-24 text-2xl ">
        My Carscout
      </h1>
      <div className="min-h-screen w-full max-w-[1200px] grid grid-cols-8 gap-4">
        <div className="w-full hidden lg:block lg:col-span-2">
          <AccountSidebar />
        </div>
        <div className="w-full col-span-8 lg:col-span-6">
          {location.pathname === "/account" ? <AccountLayout /> : null}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
