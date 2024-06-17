import { Footer } from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Magazine() {
  const navigate = useNavigate();
  return (
    <div className="pt-16 w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-col bg-white cursor-pointer">
        <div className="text-blue-800 p-4 w-full flex flex-row gap-4 justify-start border-b">
          <ChevronLeft size={24} />
          <p onClick={() => navigate("/")} className="cursor-pointer">
            HomePage
          </p>
        </div>
        <div
          className="flex flex-col"
          onClick={() => toast.info("This feature is not available yet.")}
        >
          <h1 className="w-full bg-white flex items-center justify-center p-6 text-3xl font-bold">
            CAR NEWS
          </h1>
          <hr />
          <div className="flex flex-col">
            <h1 className="p-4 text-2xl font-semibold">
              Car news: the latest articles
            </h1>
            <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-cols-3 p-2 gap-2 h-[660px] md:h-[300px] lg:h-[400px]">
              <div className="relative md:col-span-2 md:row-span-2 bg-[url('https://www.autoscout24.nl/cms-content-assets/4eAhjO1IJRv65LgsZPqzPg-b3ecd0544c769b9c4ee2f730e3d3e346-toyota-mazda-en-subaru-openen-aanval-op-ev-met-nieuwe-verbrandingsmotoren-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75">
                <div className="absolute text-sm left-2 bottom-0 lg:left-4 text-white flex flex-col gap-2">
                  <p className="text-xl lg:text-2xl font-semibold">
                    Toyota, Mazda and Subaru open attack on EV with new
                    combustion engines.
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <p>13-06-2024 # 3 min reading time</p>
                  </div>
                </div>
              </div>
              <div className="relative bg-[url('https://www.autoscout24.nl/cms-content-assets/1dtr0cNejTC7924ZVnO4AR-7152918a35a48518d4098b1455360e0c-dit-chinese-automerk-verlaat-europa-door-dreiging-importheffingen-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75">
                <div className="absolute text-sm left-2 bottom-0 lg:left-4 text-white flex flex-col gap-2">
                  <p className="text-xl lg:text-2xl font-semibold">
                    This Chinese car brand is leaving Europe due to the threat
                    of import duties
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <p>13-06-2024 # 2 min reading time</p>
                  </div>
                </div>
              </div>
              <div className="relative bg-[url('https://www.autoscout24.nl/cms-content-assets/2jD3BKpD2tTH4T2oGmMsQb-4600da0758eba90a8fa9a3ba0286c6f8-wij-vergelijken-de-kia-ev3-met-de-volvo-ex30-hyundai-kona-en-kia-niro-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75">
                <div className="absolute text-sm left-2 bottom-0 lg:left-4 text-white flex flex-col gap-2">
                  <p className="text-xl lg:text-2xl font-semibold">
                    We compare the Kia EV3 with the Volvo EX30, Hyundai Kona and
                    Kia Niro
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <p>13-06-2024 # 4 min reading time</p>
                  </div>
                </div>
              </div>
            </div>
            {/* secondpart */}
            <div className="flex flex-col">
              <div className="flex flex-col p-2 gap-4 md:flex-row">
                <div className="bg-[url('https://www.autoscout24.nl/cms-content-assets/1dtr0cNejTC7924ZVnO4AR-7152918a35a48518d4098b1455360e0c-dit-chinese-automerk-verlaat-europa-door-dreiging-importheffingen-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75 h-56 md:w-96"></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">
                    This red elephant also returns with the Lancia Ypsilon HF
                  </h1>
                  <p>
                    Lancia is back with the new generation Lancia Ypsilon. And
                    then the coolest version is yet to come: the 240 hp Ypsilon
                    HF.
                  </p>
                  <p className="pt-4">13-06-2024 # 4 min reading time</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col p-2 gap-4 md:flex-row">
                <div className="bg-[url('https://www.autoscout24.nl/cms-content-assets/6pNmp6b4EJz9QY35IBh0l8-efc888fc2efd0836a4643bdfa492bc66-de-dag-die-je-wist-dat-zou-komen-voor-het-eerst-chinese-autobouwer-in-wereldwijde-top-10-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75 h-56 md:w-96"></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">
                    This red elephant also returns with the Lancia Ypsilon HF
                  </h1>
                  <p>
                    Lancia is back with the new generation Lancia Ypsilon. And
                    then the coolest version is yet to come: the 240 hp Ypsilon
                    HF.
                  </p>
                  <p className="pt-4">13-06-2024 # 4 min reading time</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col p-2 gap-4 md:flex-row">
                <div className="bg-[url('https://www.autoscout24.nl/cms-content-assets/Zoha2nzkj8gzWxzytrJqd-847d5dd4b674616a0cd15e8f49d48889-porsche-911-facelift-2024-geen-stekker-wel-hybride-nog-geen-prijzen-bekend-2024-02-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75 h-56 md:w-96"></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">
                    This red elephant also returns with the Lancia Ypsilon HF
                  </h1>
                  <p>
                    Lancia is back with the new generation Lancia Ypsilon. And
                    then the coolest version is yet to come: the 240 hp Ypsilon
                    HF.
                  </p>
                  <p className="pt-4">13-06-2024 # 4 min reading time</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col p-2 gap-4 md:flex-row">
                <div className="bg-[url('https://www.autoscout24.nl/cms-content-assets/5Z6CeiHrvrBIqyvAJMnu3o-928d1b62ef6d3bec389063ea127d8869-bmw-3-serie-2024-krijgt-tweede-onzichtbare-facelift-met-een-belangrijke-wijziging-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75 h-56 md:w-96"></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">
                    This red elephant also returns with the Lancia Ypsilon HF
                  </h1>
                  <p>
                    Lancia is back with the new generation Lancia Ypsilon. And
                    then the coolest version is yet to come: the 240 hp Ypsilon
                    HF.
                  </p>
                  <p className="pt-4">13-06-2024 # 4 min reading time</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col p-2 gap-4 md:flex-row">
                <div className="bg-[url('https://www.autoscout24.nl/cms-content-assets/3T6TIMSXjJOfye6220Dv2M-a1f172ed87ad5e57d5ce62e6d6148f88-elektrische-volkswagen-van-20000-euro-komt-te-laat-maar-wordt-steengoed-2024-04-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75 h-56 md:w-96"></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">
                    This red elephant also returns with the Lancia Ypsilon HF
                  </h1>
                  <p>
                    Lancia is back with the new generation Lancia Ypsilon. And
                    then the coolest version is yet to come: the 240 hp Ypsilon
                    HF.
                  </p>
                  <p className="pt-4">13-06-2024 # 4 min reading time</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col p-2 gap-4 md:flex-row">
                <div className="bg-[url('https://www.autoscout24.nl/cms-content-assets/MmFvZbUqGpiDx0ubHWX3q-db6cb0ec325059fcd0af118b1a672133-ai-alfa-romeo-junior-maakt-korte-metten-met-deze-mooie-alfa-traditie-2024-01-1100.webp')] bg-cover bg-center bg-no-repeat brightness-75 h-56 md:w-96"></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">
                    This red elephant also returns with the Lancia Ypsilon HF
                  </h1>
                  <p>
                    Lancia is back with the new generation Lancia Ypsilon. And
                    then the coolest version is yet to come: the 240 hp Ypsilon
                    HF.
                  </p>
                  <p className="pt-4">13-06-2024 # 4 min reading time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
