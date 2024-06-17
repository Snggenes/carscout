import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export function ActualOffer() {
  const navigate = useNavigate();
  // return (
  //   <div className="border w-full p-10 lg:w-[620px] h-[180px] bg-white flex flex-row gap-4 items-center justify-center">
  //     <div className="flex flex-col items-center">
  //       <Avatar className="h-16 w-16">
  //         <AvatarImage src="familienauto.webp" alt="avatar" />
  //       </Avatar>
  //       <p className="text-sm">Family Car</p>
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <Avatar className="h-16 w-16">
  //         <AvatarImage src="electro.webp" alt="avatar" />
  //       </Avatar>
  //       <p className="text-sm">Electric</p>
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <Avatar className="h-16 w-16">
  //         <AvatarImage src="stadtflitzer.webp" alt="avatar" />
  //       </Avatar>
  //       <p className="text-sm">City Car</p>
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <Avatar className="h-16 w-16">
  //         <AvatarImage src="neu.webp" alt="avatar" />
  //       </Avatar>
  //       <p className="text-sm">New</p>
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <Avatar className="h-16 w-16">
  //         <AvatarImage src="car-subscription.webp" alt="avatar" />
  //       </Avatar>
  //       <p className="text-sm">Car Subscription</p>
  //     </div>
  //   </div>
  // );
  return (
    <div className="border w-full p-10 lg:w-[620px] h-[180px] bg-white flex flex-col justify-center">
      <p className="text-lg font-semibold">
        Sell your car for free and quickly!
      </p>
      <p>Enter a licence plate, receive current value, sell car</p>
      <Button className="w-1/2 mt-4" onClick={() => navigate("/sell")}>
        Sell for free
      </Button>
    </div>
  );
}
