import { Search } from "@/components/search/Search";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Search />
      <div className="h-[540px]"></div>
    </div>
  );
}
