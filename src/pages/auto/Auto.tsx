import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  topBrands,
  popularModels,
  popularElectricModels,
  topCities,
} from "@/lib/data";
import { Footer } from "@/components/Footer";

export default function Auto() {
  const navigate = useNavigate();
  let linkClassname =
    "flex flex-row gap-2 items-center w-full text-blue-800 border-b p-1 cursor-pointer";
  return (
    <div className="pt-16 w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-col bg-white">
        <div className="text-blue-800 p-4 w-full flex flex-row gap-4 justify-start border-b">
          <ChevronLeft size={24} />
          <p onClick={() => navigate("/")} className="cursor-pointer">
            HomePage
          </p>
        </div>
        <div className="flex flex-col md:px-14 lg:p-24">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="https://www.autoscout24.nl/cms-content-assets/2UIrC84VZI2COCQ6fxiTlZ-e6e2b952adc7a4c8eb9486feb0fb6f2a-top-marken-1100.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2">
              <h1 className="text-lg font-semibold px-4">Top brands</h1>
              <p className="px-4">
                About half of the most popular car brands have their roots in
                Germany, the other half are spread across the rest of the world.
                You can find all car brands here.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full p-4 gap-2 pb-24 lg:pb-12">
                {topBrands.map((brand) => (
                  <div
                    key={brand}
                    className="flex flex-row gap-1 items-center w-full"
                    onClick={() => navigate(`/list?brand=${brand}`)}
                  >
                    <ChevronRight size={16} />
                    <p className={linkClassname}>{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:px-14 lg:p-24">
          <div className="flex flex-col gap-6 lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <img
                src="https://www.autoscout24.nl/cms-content-assets/7tmuBl3EqoFKnygiawwpjq-3752bdeb80f2f64244c74cb2ebf48a36-beliebte-modelle-1100.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2">
              <h1 className="text-lg font-semibold px-4">Popular Models</h1>
              <p className="px-4">
                Some cars are more popular than others. These are the most
                popular models in the Netherlands.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full p-4 gap-2 pb-24 lg:pb-12">
                {popularModels.map((brand) => (
                  <div
                    key={brand}
                    className="flex flex-row gap-1 items-center w-full"
                  >
                    <ChevronRight size={16} />
                    <p className={linkClassname}>{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:px-14 lg:p-24">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="https://www.autoscout24.nl/cms-content-assets/4rTUASY66Pi98TLeEJNwXa-267c03287ccca9373c81f19992e4b0ab-elektroautos-1100.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2">
              <h1 className="text-lg font-semibold px-4">Electric cars</h1>
              <p className="px-4">
                Electromobility is on the rise worldwide and continues to
                develop. You can find the best-selling electric models here.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full p-4 gap-2 pb-24 lg:pb-12">
                {popularElectricModels.map((brand) => (
                  <div
                    key={brand}
                    className="flex flex-row gap-1 items-center w-full"
                  >
                    <ChevronRight size={16} />
                    <p className={linkClassname}>{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-14 lg:p-24">
          <div className="flex flex-col gap-6 lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <img
                src="https://www.autoscout24.nl/cms-content-assets/4pDTE9llRiVPAqTSFwr7jz-4137c73399c72fe23abebf4ac8e712fa-regionale-angebote-1100.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2">
              <h1 className="text-lg font-semibold px-4">Regional offer</h1>
              <p className="px-4">
                Not everyone wants to drive from Groningen to Maastricht to view
                a car. Here you will find the range of new and used cars in your
                region in the fastest way.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full p-4 gap-2 pb-24 lg:pb-12">
                {topCities.map((brand) => (
                  <div
                    key={brand}
                    className="flex flex-row gap-1 items-center w-full"
                  >
                    <ChevronRight size={16} />
                    <p className={linkClassname}>{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
