import { CarFront, Phone } from "lucide-react";
import { Button } from "../ui/button";
export function Appointments() {
  return (
    <div className="pt-20 lg:pt-36 w-full flex flex-col">
      <div className="flex flex-col items-center gap-2 bg-white">
        <CarFront size={130} />
        <h1 className="text-xl font-semibold">Appointments in Carscout</h1>
        <p className="pb-12">
          Manage your expressSales appointments easily in our office.
        </p>
        <p className="bg-slate-300 rounded-lg p-1">Launching soon.</p>
      </div>
      <div className="bg-white gap-8 w-full p-8 flex flex-col md:flex-row justify-between items-center">
        <p>
          Until then, you can make appointments for Express sales and you will
          receive confirmation by email.
        </p>
        <Button className="bg-yellow-300" variant={`ghost`} onClick={() => {}}>
          Make an appointment
        </Button>
      </div>
      <div className="mt-4 w-full flex flex-col justify-center items-center p-6 gap-1">
        <h1 className="font-bold">
          Do you have any questions about placing an advertisement?
        </h1>
        <p className="text-sm font-light">
          Carscout can be reached by telephone from Monday to Friday from 8:30
          AM to 5:00 PM. Phone number:
        </p>
        <div className="flex flex-row items-center gap-2">
          <Phone size={24} />
          <p className="text-sm">088 - 73 00 100</p>
        </div>
      </div>
    </div>
  );
}
