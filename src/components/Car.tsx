import { type TCar } from "../lib/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

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
  console.log(clickedCars);
  console.log(hasClicked);

  const handleViewClick = async () => {
    if (hasClicked) {
      return navigate(`/listing/${car._id}`);
    }
    const newClickedCars = [...clickedCars, car._id];
    localStorage.setItem("clickedCars", JSON.stringify(newClickedCars));
    setHasClicked(true);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/cars/counter`,
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
    <div className={cn(`border p-2 ` + className)}>
      <Carousel className="w-full max-w-lg xl:mr-8 cursor-pointer">
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
      <Card className="w-full max-w-lg border-none">
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
          <CardDescription>{car?.address.city}</CardDescription>
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
