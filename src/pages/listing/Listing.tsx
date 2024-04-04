import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "../../../lib/types/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";

export default function Listing() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);

  const fetchCar = async () => {
    try {
      const response = await fetch(`http://localhost:4000/cars?id=${id}`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      setCar(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, [id]);

  return (
    <div className="p-20 flex flex-row gap-8">
      <Carousel className="w-full max-w-lg">
        <CarouselContent>
            {car?.image.map((image, index) => (
                <CarouselItem key={index}>
                <img src={image} alt="" />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mx-20">
        <Card>
          <CardHeader>
            <CardTitle>{car?.brand} {car?.model}</CardTitle>
            <CardDescription>{car?.year}</CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>{car?.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>{car?.price}</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
