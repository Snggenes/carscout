import { cn } from "../../../lib/utils";
import Search from "../../pages/advanced-search/Search";

type Props = {
  className?: string;
  searchParams: URLSearchParams;
  setSearchParams: (params: any) => void;
};

export function Sidebar({ className, searchParams, setSearchParams }: Props) {
  return (
    <div
      className={cn(
        "flex  lg:w-[256px] lg:fixed left-0 top-16 px-4 border-r-2 flex-col",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 flex-1">
        <Search
          sidebar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </div>
  );
}
