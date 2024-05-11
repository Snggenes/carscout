import { Search } from "../../components/search/Search";
import { SaveQuery } from "../../components/SaveQuery";
import { ActualOffer } from "../../components/ActualOffer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Search />
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center lg:flex-row mt-4 lg:gap-8">
        <SaveQuery />
        <ActualOffer />
      </div>
      <div className="h-[540px]"></div>
    </div>
  );
}
