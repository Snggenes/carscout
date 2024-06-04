import { Info, ArrowRight, Check } from "lucide-react";

export function Advice() {
  return (
    <div className="w-full max-w-[1200px] bg-white mt-4 flex flex-col lg:flex-row items-center justify-center gap-4">
      <div className="relative h-[280px] w-full lg:w-1/2 bg-[url('https://i.pinimg.com/originals/69/44/f7/6944f78fdd2376486bd6a81166a06c37.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer">
        <AdviceInfo />
        <div className="text-white flex flex-col gap-2 lg:gap-4 absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
          <p className="text-lg">Overview of all models and brands</p>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-sm">Read more</p>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
      <div className="relative h-[280px] w-full lg:w-1/2 bg-[url('https://s.aolcdn.com/os/ab/_cms/2023/06/25195051/2024-Audi-RS-6-Avant-in-Mythos-Black-action-rear-three-quarter-misty.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer">
        <AdviceInfo />
        <LeaseInfo />
      </div>
    </div>
  );
}

function AdviceInfo() {
  return (
    <div className="text-white text-sm p-1 absolute top-2 left-2 bg-[#333333]">
      <div className="flex flex-row gap-1 items-center">
        <Info size={16} />
        <p>Advice</p>
      </div>
    </div>
  );
}

function LeaseInfo() {
  return (
    <div className="absolute text-sm left-2 top-14 lg:left-4 text-white flex flex-col gap-2">
      <p className="text-base">Financial lease</p>
      <p className="text-base">Accelerate your business growth</p>
      <div className="flex flex-row gap-2 items-center">
        <Check size={16} />
        <p>Fical benefits</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Check size={16} />
        <p>Retain power</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Check size={16} />
        <p>Flexible term</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p>Discover now</p>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}
