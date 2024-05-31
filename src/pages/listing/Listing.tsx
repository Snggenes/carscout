// import { useState } from "react";
// import Map from "@/components/Map";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import { TCar } from "../../lib/types/types";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import {
  MapPin,
  Share,
  Kanban,
  Antenna,
  Fuel,
  Calendar,
  Gauge,
} from "lucide-react";
import Heart from "@/components/Heart";
import { Button } from "@/components/ui/button";

import { useUser } from "@/contexts/userContext";

export default function Listing() {
  const { id } = useParams();
  const { user } = useUser();
  const url = window.location.href;
  // const [center, setCenter] = useState<[number, number]>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery<TCar>({
    queryKey: ["car", id],
    queryFn: async () => {
      const response = await fetch(`/api/cars?id=${id}`);
      const data = await response.json();
      // setCenter([data.address.latitude, data.address.longitude]);
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <div className="pt-16 lg:px-4 flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white max-w-[1200px]">
        <Carousel className="cursor-pointer w-full">
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
        <Card className="border-none w-full lg:mt-2">
          <CardContent className="flex flex-row justify-between pt-4 pb-0">
            {user?.username && (
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                Save <Heart car={car} />
              </div>
            )}
            <CopyToClipboard text={url}>
              <button className="flex flex-row gap-2 items-center cursor-pointer">
                Share{" "}
                <Share onClick={() => toast.info("URL copied to clipboard!")} />
              </button>
            </CopyToClipboard>
            <div></div>
          </CardContent>
          <CardHeader>
            <CardTitle>
              {car?.brand} {car?.model}
            </CardTitle>
            <CardDescription>
              {car?.km}km | {car?.transmission} | {car?.year}
            </CardDescription>
            <CardDescription className="flex flex-row text-blue-400">
              {car?.address.city} <MapPin className="h-4" />
            </CardDescription>
            <hr />
            <CardTitle className="pt-2">€ {car?.price}</CardTitle>
            <CardDescription className="text-xl pb-2">
              Calculate your car loan
            </CardDescription>
            <hr />
            <CardDescription className="flex flex-row items-center gap-4">
              From{" "}
              <span className=" font-semibold text-xl">
                {Math.floor(car?.price / 70)} €
              </span>{" "}
              per month
              <img
                src="https://dvdzzp.nl/wp-content/uploads/2022/04/financiallease-logo-vierkant-424x212.png"
                width={100}
                height={10}
                onClick={() => {}}
              />
            </CardDescription>
            <hr />
            <CardDescription className="text-xl flex flex-row items-center gap-4">
              Monthly insurance{" "}
              <img
                src="https://www.xaris.nl/wp-content/uploads/2018/07/anwb-logo.png"
                width={50}
                height={10}
                onClick={() => {}}
              />
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between py-1 gap-4">
            <Button className="w-full bg-[#F9F766]" variant={`link`}>
              Contact Provider
            </Button>
            <Button className="w-full bg-[#F9F766]" variant={`link`}>
              Show Number
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-none w-full">
          <CardContent className="grid grid-cols-3 gap-4 pt-4 pb-4">
            <div>
              <CardDescription className="flex flex-row items-center gap-2">
                Kilometer <Kanban />
              </CardDescription>
              <CardDescription className="font-semibold text-lg">
                {car?.km}km
              </CardDescription>
            </div>
            <div>
              <CardDescription className="flex flex-row items-center gap-2">
                Year <Calendar />
              </CardDescription>
              <CardDescription className="font-semibold text-lg">
                {car?.year}
              </CardDescription>
            </div>
            <div>
              <CardDescription className="flex flex-row items-center gap-2">
                Transmission <Antenna />
              </CardDescription>
              <CardDescription className="font-semibold text-lg">
                {car?.transmission}
              </CardDescription>
            </div>
            <div>
              <CardDescription className="flex flex-row items-center gap-2">
                Fuel <Fuel />
              </CardDescription>
              <CardDescription className="font-semibold text-lg">
                {car?.fuel}
              </CardDescription>
            </div>
            <div>
              <CardDescription className="flex flex-row items-center gap-2">
                Power <Gauge />
              </CardDescription>
              <CardDescription className="font-semibold text-lg">
                {car?.power}hp
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4 w-full max-w-[1200px]">
        <CardHeader className="mb-0 pb-0">
          <CardTitle>Quality Reports</CardTitle>
        </CardHeader>
        <CardContent className="mt-0 pt-0 flex flex-col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PZX95QfFbZDCtxFC_E0yMItVK2GFmxdGETbwVm5P9Q&s"
            width={100}
            height={10}
            onClick={() => {}}
          />
          <CardDescription>
            Receive detailed information about this car and prevent a bad
            purchase. View the most common MOT rejection points, repairs and
            mileage checks now.
          </CardDescription>
          <Button
            className="mt-6"
            variant={`ghost`}
            onClick={() =>
              window.open(
                `https://www.finnik.nl/kenteken/${car?.licencePlate}/gratis`
              )
            }
          >
            Free car report from Finnik
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}