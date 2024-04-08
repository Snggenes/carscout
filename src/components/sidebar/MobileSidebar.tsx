import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: (params: any) => void;
};

export function MobileSidebar({ searchParams, setSearchParams }: Props) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </SheetContent>
    </Sheet>
  );
}
