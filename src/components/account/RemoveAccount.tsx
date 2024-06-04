import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/userContext";
import { handleDeleteAccount } from "@/lib/api";
import { ArrowLeftFromLine } from "lucide-react";

export function RemoveAccount() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  return (
    <div className="w-full bg-white flex flex-col gap-4 relative">
      <ArrowLeftFromLine
        size={32}
        className="p-1 cursor-pointer absolute top-9 left-4 rounded-xl hover:shadow-xl transition duration-300"
        onClick={() => navigate("/account/settings")}
      />
      <p className="text-lg flex items-center justify-center w-full py-8">
        Remove account
      </p>
      <div className="flex flex-col lg:px-32">
        <h1 className="pb-4 text-sm font-semibold">
          Do you really want to delete your account?
        </h1>
        <div className="flex flex-row gap-2">
          <Dot size={32} />
          <p>This action deletes your ads, and your searches.</p>
        </div>
        <div className="flex flex-row gap-2">
          <Dot size={32} />
          <p>
            All data will be deleted - apart from data that must be kept for
            legal reasons.
          </p>
        </div>
        <div className="flex flex-row gap-2 pb-4">
          <Dot size={32} />
          <p>You cannot undo the deletion of your account.</p>
        </div>
        <p className="text-blue-300 pb-6">Learn more about data protection</p>
        <Button
          className="bg-yellow-300 hover:bg-yellow-200 mb-2 transition duration-500"
          variant={`ghost`}
          onClick={() => navigate("/account/settings")}
        >
          Cancel
        </Button>
        <Button
          className="mb-20 text-red-700 hover:text-red-800 hover:bg-white hover:underline transition duration-500"
          variant={`ghost`}
          onClick={() => handleDeleteAccount(navigate, toast, setUser)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
