import { MobileSidebar } from "./MobileSidebar";

export const MobileHeader = () => {
  return (
    <div className="lg:hidden px-6 h-[50px] flex items-center border-b absolute top-16 w-full z-50">
      <MobileSidebar />
    </div>
  );
};
