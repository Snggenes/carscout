import { UploadWidget } from "@/components/image-upload/UploadWidget";
import { CardTitle } from "@/components/ui/card";

type PhotosProps = {
  setImage: any;
};

export function Photos({ setImage }: PhotosProps) {
  return (
    <div className="space-y-4 flex flex-col">
      <CardTitle className=" font-normal text-xl mb-6">Images</CardTitle>
      <p className="">A maximum of 50 images can be uploaded.</p>
      <p className="bg-blue-100 py-1 px-6">
        Horizontale foto's trekken meer aandacht en zijn beter geschikt voor
        mensen die vanaf hun telefoon naar uw advertenties kijken. Wij raden aan
        ze, waar mogelijk, bij te snijden tot een 4:3 verhouding.
      </p>
      <div className="w-full h-[480px] flex justify-center items-center border-4 border-dotted">
        <UploadWidget setImage={setImage} />
      </div>
    </div>
  );
}
