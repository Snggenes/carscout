import { MobileSidebar } from "./MobileSidebar";

type MobileHeaderProps = {
  searchParams: URLSearchParams;
  setSearchParams: (params: any) => void;
};

export const MobileHeader = ({
  searchParams,
  setSearchParams,
}: MobileHeaderProps) => {
  return (
    <div className="lg:hidden px-6 h-[50px] flex items-center bg-yellow-500 border-b fixed top-16 w-full z-50">
      <MobileSidebar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};
