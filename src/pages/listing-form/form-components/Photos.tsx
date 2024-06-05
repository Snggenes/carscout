import { UploadWidget } from "@/components/image-upload/UploadWidget";
import { CardTitle } from "@/components/ui/card";

type PhotosProps = {
  setImage: any;
};

export function Photos({ setImage }: PhotosProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6 font-normal text-xl">Images</CardTitle>
      <UploadWidget setImage={setImage} />
    </div>
  );
}
