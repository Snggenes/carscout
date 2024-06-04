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
  CardContent,
} from "./ui/card";
import { useState, useEffect } from "react";
import { Share } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useUser } from "../contexts/userContext";
import { handleViewClick } from "../lib/api";
import { Antenna, Calendar, Fuel, Gauge, Kanban, MapPin } from "lucide-react";

type Props = {
  car: TCar;
  mainPage?: boolean;
};

export function Car({ car, mainPage }: Props) {
  const [hasClicked, setHasClicked] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const url = window.location.href;

  const clickedCars = JSON.parse(localStorage.getItem("clickedCars") || "[]");

  useEffect(() => {
    if (clickedCars.includes(car._id)) {
      setHasClicked(true);
    }
  }, []);

  if (mainPage) {
    return (
      <div className="border py-2 flex justify-center flex-col">
        <Carousel className="cursor-pointer">
          <CarouselContent>
            {car?.image.map((image: any, index: any) => (
              <CarouselItem
                key={index}
                onClick={() =>
                  handleViewClick(
                    hasClicked,
                    setHasClicked,
                    navigate,
                    car,
                    clickedCars
                  )
                }
              >
                <img src={image} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Card className="border-none">
          <CardHeader>
            <CardTitle>{car?.brand}</CardTitle>
            <CardDescription className="font-semibold text-lg">
              {car?.model}
            </CardDescription>
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
        </Card>
      </div>
    );
  } else {
    return (
      <div className="rounded-lg bg-white border p-2 flex justify-center flex-col gap-2">
        <CardTitle className="py-2 flex flex-row items-center justify-between text-xl">
          <p>
            {car?.brand} {car?.model}
          </p>
          <div className="flex flex-row justify-between gap-4">
            {user?.username && (
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                <Heart car={car} />
              </div>
            )}
            <CopyToClipboard text={url}>
              <button className="flex flex-row gap-2 items-center cursor-pointer">
                <Share onClick={() => toast.info("URL copied to clipboard!")} />
              </button>
            </CopyToClipboard>
          </div>
        </CardTitle>
        <div className="flex flex-col md:flex-row">
          <Carousel className="cursor-pointer w-full md:w-1/3">
            <CarouselContent>
              {car?.image.map((image: any, index: any) => (
                <CarouselItem
                  key={index}
                  onClick={() =>
                    handleViewClick(
                      hasClicked,
                      setHasClicked,
                      navigate,
                      car,
                      clickedCars
                    )
                  }
                >
                  <img src={image} alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Card className="border-none w-full md:w-2/3">
            <CardHeader>
              <CardTitle className="pb-2">€ {car?.price}</CardTitle>
              <hr />
              <CardDescription className="text-base text-blue-400 flex flex-row items-center gap-4 cursor-pointer">
                Apply for a car loan{" "}
                <img
                  src="https://t3.ftcdn.net/jpg/04/38/01/32/360_F_438013262_26mHbQKLmIe6XynsGoH9eGQ4xnIEfzzY.jpg"
                  width={50}
                  height={10}
                  onClick={() => {}}
                />
              </CardDescription>
              <hr />
              <CardDescription className="text-base text-blue-400 flex flex-row items-center gap-4 cursor-pointer">
                Monthly insurance{" "}
                <img
                  src="https://www.xaris.nl/wp-content/uploads/2018/07/anwb-logo.png"
                  width={50}
                  height={10}
                  onClick={() => {
                    window.open("https://www.anwb.nl/autoverzekering");
                  }}
                />
              </CardDescription>
              <hr />
              <div>
                <CardContent className="flex flex-wrap gap-4 pt-4 pb-0">
                  <div>
                    <CardDescription className="font-semibold flex flex-row gap-2 items-center">
                      <Kanban /> {car?.km}km
                    </CardDescription>
                  </div>
                  <div>
                    <CardDescription className="font-semibold flex flex-row gap-2 items-center">
                      <Calendar /> {car?.year}
                    </CardDescription>
                  </div>
                  <div>
                    <CardDescription className="font-semibold flex flex-row gap-2 items-center">
                      <Antenna /> {car?.transmission}
                    </CardDescription>
                  </div>
                  <div>
                    <CardDescription className="font-semibold flex flex-row gap-2 items-center">
                      <Fuel /> {car?.fuel}
                    </CardDescription>
                  </div>
                  <div>
                    <CardDescription className="font-semibold flex flex-row gap-2 items-center">
                      <Gauge /> {car?.power}hp
                    </CardDescription>
                  </div>
                </CardContent>
              </div>
            </CardHeader>
          </Card>
        </div>
        <CardFooter className="flex flex-col items-start py-1">
          <CardDescription className="flex flex-row items-center">
            {car?.address.city} <MapPin className="h-4" />
          </CardDescription>
        </CardFooter>
      </div>
    );
  }
}
