import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader size="2rem" />
    </div>
  );
}