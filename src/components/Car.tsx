import { type TCar } from "../lib/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

import { useNavigate } from "react-router-dom";
import Heart from "./Heart";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  car: TCar;
  className?: string;
};

export function Car({ car, className }: Props) {
  const [hasClicked, setHasClicked] = useState(false);
  const navigate = useNavigate();

  const clickedCars = JSON.parse(localStorage.getItem("clickedCars") || "[]");

  useEffect(() => {
    if (clickedCars.includes(car._id)) {
      setHasClicked(true);
    }
  }, []);

  const handleViewClick = async () => {
    if (hasClicked) {
      return navigate(`/listing/${car._id}`);
    }
    const newClickedCars = [...clickedCars, car._id];
    localStorage.setItem("clickedCars", JSON.stringify(newClickedCars));
    setHasClicked(true);
    const response = await fetch(
      `/api/cars/counter`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: car._id }),
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    navigate(`/listing/${car._id}`);
  };

  return (
    <div className={cn(`border p-2 flex justify-center ` + className)}>
      <Carousel className="cursor-pointer">
        <CarouselContent>
          {car?.image.map((image: any, index: any) => (
            <CarouselItem key={index}>
              <img src={image} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Card className="border-none">
        <CardHeader>
          <CardTitle>
            {car?.brand} {car?.model}
          </CardTitle>
          <CardDescription>€ {car?.price}</CardDescription>
          <CardDescription>
            {car?.km}km | {car?.transmission} | {car?.year}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between py-1">
          <CardDescription className="flex flex-row text-blue-400">
            {car?.address.city} <MapPin className="h-4" />
          </CardDescription>
          <Heart car={car} />
        </CardFooter>

        <CardFooter className="p-0 m-0">
          <Button
            onClick={handleViewClick}
            variant={"ghost"}
            className="w-full"
          >
            View
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
