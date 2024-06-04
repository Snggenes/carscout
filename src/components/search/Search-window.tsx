import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Search } from "./Search";

export function SearchWindow() {
  return (
    <div className="bg-white px-4">
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-center gap-4 bg-[#4C4C4C] text-white rounded-lg">
            Open the search window
          </AccordionTrigger>
          <AccordionContent>
            <Search className="block md:hidden" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
