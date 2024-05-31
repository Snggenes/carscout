import { useSearchParams } from "react-router-dom";

import { Car } from "@/components/Car";
import Loading from "../../components/Loading";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function List() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = new URLSearchParams(searchParams).toString();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    isLoading,
    error,
    data: cars,
  } = useQuery({
    queryKey: ["cars", queryString],
    queryFn: async () => {
      const response = await fetch(`/api/cars?${queryString}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 2,
  });

  if (error) return <div>Error: {error.message}</div>;

  useEffect(() => {
    const trackWindowSize = () => {
      if (window.innerWidth > 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", trackWindowSize);
    return () => {
      window.removeEventListener("resize", trackWindowSize);
    };
  }, []);

  return (
    <div className="pt-16 flex justify-center">
      <div className="min-h-screen w-full max-w-[1200px] flex flex-col lg:gap-4 lg:grid grid-cols-5 relative">
        <div
          className={
            sidebarOpen
              ? "absolute z-50 w-60 min-h-screen shadow-lg rounded-lg bg-white"
              : "pt-4 hidden lg:flex bg-white"
          }
        >
          <Sidebar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
        </div>
        <div
          className="block lg:hidden p-2 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={32} />
        </div>
        {isLoading && <Loading />}
        {cars?.length === 0 && <div>No cars found</div>}
        <div className="w-full col-span-4 lg:py-4 space-y-4">
          {cars?.map((car: any) => (
            <Car key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
