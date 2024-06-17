import { Search } from "../../components/search/Search";
import { SearchWindow } from "@/components/search/Search-window";
import { SaveQuery } from "../../components/SaveQuery";
import { ActualOffer } from "../../components/ActualOffer";
import { LastAddedCars } from "../../components/LastAddedCars";
import { Advice } from "@/components/Advice";
import { Brief } from "./home-components/Brief";
import { MoveUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={topRef}
      className="pt-16 flex flex-col justify-center items-center w-full"
    >
      <div className="w-full md:p-8 flex flex-col justify-between items-center h-[220px] sm:h-[290px] md:h-[360px] lg:h-[430px] xl:h-[500px] bg-[url('https://www.tweedehandsauto.nl/wp-content/uploads/2023/04/148881163_m-1568x1046.jpg')] bg-cover bg-center bg-no-repeat">
        <div></div>
        <div></div>
        <Search className="hidden md:block" />
      </div>
      <div className="w-full mt-4 md:hidden">
        <SearchWindow />
      </div>
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center lg:flex-row mt-4 gap-2 lg:gap-4">
        <SaveQuery />
        <ActualOffer />
      </div>
      <LastAddedCars />
      <Advice />
      <LastAddedCars />
      <Brief />
      <div className="my-8 px-8 w-full max-w-[1200px]">
        <p className="font-light text-sm text-gray-400">VAT deductible</p>
        <p className="font-light text-sm text-gray-400">
          More information about the fuel consumption and CO2 emissions of new
          vehicles can be obtained at all sales points and at:
          www.energielabel.nl.
        </p>
        <hr className="mt-8" />
        <div className="w-full flex justify-end p-4">
          <div
            className="flex flex-row gap-2 items-center cursor-pointer text-blue-900"
            onClick={scrollToTop}
          >
            <p>Upwards</p>
            <MoveUp size={18} />
          </div>
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}
