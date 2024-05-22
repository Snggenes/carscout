import { useSearchParams } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileHeader } from "@/components/sidebar/MobileHeader";

import { Car } from "@/components/Car";
import Loading from "../../components/Loading";

import { useQuery } from "@tanstack/react-query";

export default function List() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryString = new URLSearchParams(searchParams).toString();

  const {
    isLoading,
    error,
    data: cars,
  } = useQuery({
    queryKey: ["cars", queryString],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/cars?${queryString}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 2,
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <MobileHeader
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Sidebar
        className="hidden lg:flex"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="lg:pl-[256px] pt-[50px] lg:pt-0">
        <div className="max-w-[1256px] mx-auto lg:pt-6 h-full">
          {isLoading && <Loading />}
          {cars?.length === 0 && <div>No cars found</div>}
          {cars?.map((car: any) => (
            <div key={car?._id} className="ml-0 lg:ml-8 flex flex-col justify-center lg:justify-start items-center xl:flex-row xl:gap-8 px-6">
              <div className="p-4 flex flex-col xl:flex-row xl:gap-8 xl:pl-8">
                <Car key={car._id} car={car} className="flex flex-col md:flex-row"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
