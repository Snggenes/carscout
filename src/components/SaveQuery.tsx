import { Button } from "./ui/button";
import { Car } from "lucide-react";

import {useStore} from "../contexts/store";

export function SaveQuery() {
  const store = useStore();
  const values = Array.from(store.params.values());

  if (values.length === 0) {
    return (
      <div className="border w-full md:w-2/3  lg:w-[620px] h-[180px] bg-white flex flex-col justify-between p-10 gap-8">
      <div className="flex flex-row items-center gap-8">
        <Car size={30} />
        <div>
          <h2 className="text-lg font-semibold">Save this query</h2>
          <p className="text-sm text-stone-500">
            Save this query to get notifications when new cars are added
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
      >
        Save Query
      </Button>
    </div>
    );
  }
  
  return (
    <div className="border w-full md:w-2/3 lg:w-[620px] h-[180px] bg-white flex flex-col justify-between p-10 gap-8">
      <div className="flex flex-row items-center gap-8">
        <Car size={30} />
        <div>
          <h2 className="text-sm text-stone-500">Your last search</h2>
          <p className="text-lg font-semibold">
            {values[0]}
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
      >
        Save Query
      </Button>
    </div>
  );
}
