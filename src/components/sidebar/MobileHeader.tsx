import { MobileSidebar } from "./MobileSidebar";

type MobileHeaderProps = {
  searchParams?: any;
  setSearchParams?: any;
};

export const MobileHeader = ({searchParams, setSearchParams}: MobileHeaderProps) => {
  return (
    <div className="lg:hidden px-6 h-[50px] flex items-center border-b absolute top-16 w-full z-50">
      <MobileSidebar searchParams={searchParams} setSearchParams={setSearchParams}/>
    </div>
  );
};
