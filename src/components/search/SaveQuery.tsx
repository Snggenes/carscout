import { toast } from "react-toastify";
import { Button } from "../../../components/ui/button";
import { Car } from "lucide-react";

type SaveQueryProps = {
  getInfoForQuery: () => any;
};

export function SaveQuery({ getInfoForQuery }: SaveQueryProps) {
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
        onClick={() => {
          toast(JSON.stringify(getInfoForQuery()));
        }}
        variant="ghost"
      >
        Save Query
      </Button>
    </div>
  );
}
