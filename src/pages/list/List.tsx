import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileHeader } from "@/components/sidebar/MobileHeader";

import { Car } from "@/components/Car";
import { type TCar } from "../../../lib/types/types";

type Props = TCar[];

export default function List() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([] as any[]);

  const onSuccess = (data: Props) => {
    setCars(data);
  };

  const { performFetch } = useFetch("cars", onSuccess);

  useEffect(() => {
    performFetch();
  }, [searchParams]);

  return (
    <div>
      <MobileHeader
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Sidebar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        className="hidden lg:flex"
      />
      <div className="lg:pl-[256px] pt-[50px] lg:pt-0">
        <div className="max-w-[1256px] mx-auto pt-6 h-full">
          {cars?.map((car) => (
            <Car key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
