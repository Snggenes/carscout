import { Search } from "../../components/search/Search";
import { SearchWindow } from "@/components/search/Search-window";
import { SaveQuery } from "../../components/SaveQuery";
import { ActualOffer } from "../../components/ActualOffer";
import { LastAddedCars } from "../../components/LastAddedCars";
import { Advice } from "@/components/Advice";

export default function Home() {
  return (
    <div className="pt-16 flex flex-col justify-center items-center w-full">
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
      <div className="h-[540px]"></div>
    </div>
  );
}
