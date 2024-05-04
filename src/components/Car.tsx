import { type TCar } from "../lib/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { useNavigate } from "react-router-dom";
import Heart from "./Heart"

type Props = {
  car: TCar;
};

export function Car({ car }: Props) {
  const navigate = useNavigate();
  return (
    <div className="ml-0 lg:ml-8 flex flex-col justify-center lg:justify-start items-center xl:flex-row xl:gap-8 px-6 border">
      <div className="p-4 flex flex-col xl:flex-row xl:gap-8 xl:pl-8">
        <Carousel className="w-full max-w-lg xl:mr-8 cursor-pointer">
          <CarouselContent>
            {car?.image.map((image: any, index: any) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2"/>
          <CarouselNext className="right-2"/>
        </Carousel>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold" onClick={()=>{navigate(`/listing/${car._id}`)}}>
            {car?.brand} {car?.model}
          </h1>
          <p className="text-lg font-semibold text-gray-800">€ {car?.price}</p>
          <hr />
          <div className="flex flex-row gap-2">
            <p className="text-md font-light">{car?.km}-km</p>
            <p className="text-md font-light">{car?.transmission}</p>
            <p className="text-md font-light">
              {car
                ? `${new Date(car.createdAt).getMonth() + 1}/${new Date(
                    car.createdAt
                  ).getFullYear()}`
                : ""}
            </p>
            <p className="text-md font-light">{car?.fuel}</p>
            <p className="text-md font-light">{car?.power}-hp</p>
            <p><Heart car={car}/></p>
          </div>
        </div>
      </div>
    </div>
  );
}
