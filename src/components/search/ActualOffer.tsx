import { Avatar, AvatarImage } from "../../../components/ui/avatar";

export function ActualOffer() {
  return (
    <div className="border w-full md:w-2/3  lg:w-[620px] h-[180px] bg-white flex flex-row gap-4 items-center justify-center">
      <div className="flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="familienauto.webp" alt="avatar" />
        </Avatar>
        <p className="text-sm">Family Car</p>
      </div>
      <div className="flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="electro.webp" alt="avatar" />
        </Avatar>
        <p className="text-sm">Electric</p>
      </div>
      <div className="flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="stadtflitzer.webp" alt="avatar" />
        </Avatar>
        <p className="text-sm">City Car</p>
      </div>
      <div className="flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="neu.webp" alt="avatar" />
        </Avatar>
        <p className="text-sm">New</p>
      </div>
      <div className="flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="car-subscription.webp" alt="avatar" />
        </Avatar>
        <p className="text-sm">Car Subscription</p>
      </div>
    </div>
  );
}
