import { Outlet } from "react-router-dom";

export default function Account() {
  return (
    <div className="pt-16 w-full flex flex-col items-center">
      <div className="min-h-screen w-full max-w-[1200px] grid grid-cols-7">
        <div className="w-full hidden lg:block lg:col-span-2 bg-blue-500">
          abc
        </div>
        <div className="w-full col-span-7 lg:col-span-5 bg-red-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
