import { Search } from "@/components/search/Search";
import { Car } from "lucide-react";

import { SaveQuery } from "./SaveQuery";
import { ActualOffer } from "./ActualOffer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        <img src="/main.webp" alt="" className="w-full object-cover" />
        <div className="absolute top-[50%] xl:top-[70%] ml-4 md:ml-16 w-full">
          <div className="w-12 h-8 bg-white flex flex-row items-center justify-center">
            <Car size={30} />
          </div>
          <Search />
        </div>
      </div>
      <div className="w-full bg-red-300 mt-6 lg:mt-12 max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-8">
      <SaveQuery />
      <ActualOffer />
      </div>
    </div>
  );
}
