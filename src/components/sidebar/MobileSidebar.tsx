import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-slate-500" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
