import { cn } from "../../../lib/utils";

type Props = {
  className?: string;
};

export function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "border flex mt-6 lg:w-[256px] lg:fixed left-0 top-16 px-4 border-r-2 flex-col",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 flex-1">
        <p>abc</p>
      </div>
    </div>
  );
}
