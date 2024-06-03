import { Check, BookHeart } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function Searches() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full max-w-[1200px] flex flex-col lg:p-4 gap-4 mt-10 lg:mt-36">
      <div className="w-full flex justify-center">
        <h1 className="mt-8 lg:mt-4">No searches yet</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 items-center p-12 pb-32">
        <div>
          <BookHeart size={130} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Check size={24} />
            <p>Quickly re-run saved searches.</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check size={24} />
            <p>Receive notifications about new offers by email.</p>
          </div>
          <Button
            className="mt-8 bg-yellow-300"
            variant={`ghost`}
            onClick={() => navigate("/list")}
          >
            Start new searches
          </Button>
        </div>
      </div>
    </div>
  );
}
