import { Search } from "@/components/search/Search";
import { Car } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        <img src="/main.webp" alt="" className="w-full object-cover" />
        <div className="absolute top-[50%] xl:top-[70%] ml-4 md:ml-16">
          <div className="w-12 h-8 bg-white flex flex-row items-center justify-center">
            <Car size={30} />
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}
