import { Search } from "../../components/search/Search";
import { SaveQuery } from "../../components/SaveQuery";
import { ActualOffer } from "../../components/ActualOffer";
import { LastAddedCars } from "../../components/LastAddedCars";


export default function Home() {
  return (
    <div className="pt-16 flex flex-col justify-center items-center w-full">
      <Search />
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center lg:flex-row mt-4 gap-2 lg:gap-8">
        <SaveQuery />
        <ActualOffer />
      </div>
      <LastAddedCars />
      <div className="h-[540px]"></div>
    </div>
  );
}
