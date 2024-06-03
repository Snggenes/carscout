import { Button } from "./ui/button";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

export function SaveQuery() {
  const navigate = useNavigate();
  const { user } = useUser();
  const userSearchParams = new URLSearchParams(user?.lastSearch);
  const values = Array.from(userSearchParams.entries());

  const brandAndModel = values.filter(
    ([key]) => key === "brand" || key === "model"
  );

  if (!user?.username) {
    return (
      <div className="border w-full lg:w-[620px] h-[180px] bg-white flex flex-col justify-between p-10 gap-8">
        <div className="flex flex-row items-center gap-8">
          <Car size={30} />
          <div>
            <h2 className="text-lg font-semibold">Save your searches</h2>
            <p className="text-sm text-stone-500">
              Save your searches to get notifications when new cars are added
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={() => {
            navigate("/login", {
              state: {
                from: location.pathname,
              },
            });
          }}
        >
          Login
        </Button>
      </div>
    );
  }

  if (!user?.lastSearch) {
    return (
      <div className="border w-full lg:w-[620px] h-[180px] bg-white flex flex-col justify-between p-10 gap-8">
        <div className="flex flex-row items-center gap-8">
          <Car size={30} />
          <div>
            <h2 className="text-lg font-semibold">Get the notifications</h2>
            <p className="text-sm text-stone-500">
              Your queries are automaticall saved so that we can inform you when
              new cars are added.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border w-full lg:w-[620px] h-[180px] bg-white flex flex-col justify-between p-10 gap-8">
      <div className="flex flex-row items-center gap-8">
        <Car size={30} />
        <div>
          <h2 className="text-sm text-stone-500">Your last search</h2>
          <p className="text-lg font-semibold">
            {brandAndModel.map(([, value]) => `${value}`).join(", ")}
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
        onClick={() => {
          navigate(`/list?${userSearchParams.toString()}`);
        }}
      >
        Continue Exploring
      </Button>
    </div>
  );
}
