import { useState } from "react";
import { useParams } from "react-router-dom";
import { TCar } from "../../lib/types/types";
import Map from "@/components/Map";

import { MapPin } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

import { useQuery } from "@tanstack/react-query";

export default function Listing() {
  const { id } = useParams();
  const [center, setCenter] = useState<[number, number]>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery<TCar>({
    queryKey: ["car", id],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/cars?id=${id}`
      );
      const data = await response.json();
      setCenter([data.address.latitude, data.address.longitude]);
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="w-full flex justify-center">
      <div className="bg-slate-200 flex flex-1 flex-col gap-4 lg:gap-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row">
          <Carousel className="w-full lg:w-1/2">
            <CarouselContent>
              {car?.image.map((image: any, index: any) => (
                <CarouselItem key={index}>
                  <img src={image} alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="w-full lg:w-1/2 lg:ml-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {car?.brand} {car?.model}
                </CardTitle>
                <CardDescription className="flex flex-row text-blue-400">
                  {car?.address.city}
                  <MapPin className="h-4" />
                </CardDescription>
              </CardHeader>
              <hr />
              <CardContent>
              <CardTitle className="pt-4">${car?.price}</CardTitle>

              </CardContent>
              <hr />
              <CardContent className="flex flex-col md:flex-row gap-4">
                <div>
                  <CardDescription>Kilometer</CardDescription>
                  <CardTitle className="text-base">{car?.km}</CardTitle>
                </div>
                <div>
                  <CardDescription>Transmission</CardDescription>
                  <CardTitle className="text-base">
                    {car?.transmission}
                  </CardTitle>
                </div>
                <div>
                  <CardDescription>Year</CardDescription>
                  <CardTitle className="text-base">{car?.year}</CardTitle>
                </div>
              </CardContent>
              <CardContent className="flex flex-col md:flex-row gap-4">
                <div>
                  <CardDescription>Fuel</CardDescription>
                  <CardTitle className="text-base">{car?.fuel}</CardTitle>
                </div>
                <div>
                  <CardDescription>Power</CardDescription>
                  <CardTitle className="text-base">
                    {car?.power} HP
                  </CardTitle>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
        <div>
          {center && (
            <Map
              lat={Number(car?.address.latitude)}
              lng={Number(car?.address.longitude)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
