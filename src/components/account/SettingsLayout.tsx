import { Mail, Contact, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SettingsLayout() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="p-8 bg-white w-full flex justify-center items-center text-lg">
        Manage your profile
      </h1>
      <div className="p-8 w-full  bg-white flex flex-wrap justify-center gap-4 lg:gap-8">
        <div className="border p-8 flex flex-col gap-2 justify-center items-center">
          <Mail size={155} />
          <p className="text-blue-400 font-light">E-mail</p>
        </div>
        <div className="border p-8 flex flex-col gap-2 justify-center items-center">
          <Contact size={155} />
          <p className="text-blue-400 font-light">Contact information</p>
        </div>
        <div className="border p-8 flex flex-col gap-2 justify-center items-center">
          <KeyRound size={155} />
          <p className="text-blue-400 font-light">Password</p>
        </div>
      </div>
      <h1 className="p-8 bg-white w-full flex justify-center items-center">
        <p
          className="text-base text-red-700 cursor-pointer hover:underline pb-10"
          onClick={() => navigate("/account/settings/remove-account")}
        >
          Remove your account
        </p>
      </h1>
    </>
  );
}
