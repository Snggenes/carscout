import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "../../../lib/types/types";
import Map from "@/components/Map";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";

import useFetch from "@/hooks/useFetch";

export default function Listing() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [center, setCenter] = useState<[number, number]>();

  const onSuccess = (data: any) => {
    console.log(data);
    setCar(data);
    setCenter([data.address.latitude, data.address.longitude]);
  };

  const { performFetch } = useFetch(`cars?id=${id}`, onSuccess);

  useEffect(() => {
    performFetch();
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
            <CardTitle>
              {car?.brand} {car?.model}
            </CardTitle>
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
      {center && (
        <Map
          lat={Number(car?.address.latitude)}
          lng={Number(car?.address.longitude)}
        />
      )}
    </div>
  );
}
