import { Switch } from "../ui/switch";
import { useUser } from "@/contexts/userContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { handleNotifications } from "@/lib/api";

export function Notifications() {
  const [isDisabled, setIsDisabled] = useState(false);
  const { user, setUser } = useUser();

  return (
    <div className="pt-12 lg:pt-36 w-full flex flex-col">
      <div className="bg-white flex flex-col justify-center items-center gap-1 py-14">
        <h1 className="text-lg">We would like to stay in touch with you.</h1>
        <p className="text-sm font-light">
          Please indicate which updates you want to receive.
        </p>
      </div>
      <div className="bg-white px-12 flex flex-row items-center gap-8 pb-14">
        <div className="flex flex-col justify-between w-full">
          <h1 className="font-bold text-lg">Favorites</h1>
          <p>
            Updates of your favorite vehicles, such as price changes, additional
            photos, etc.
          </p>
        </div>
        <Switch
          checked={user?.notification}
          onClick={() => handleNotifications(setUser, toast, setIsDisabled)}
          disabled={isDisabled}
        />
      </div>
      <hr />
      <div className="h-[30px] bg-white"></div>
    </div>
  );
}
