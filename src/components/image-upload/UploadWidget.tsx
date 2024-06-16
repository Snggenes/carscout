import { Button } from "../../components/ui/button";
import { useEffect, useRef } from "react";

type Props = {
  setImage: any;
};

export function UploadWidget({ setImage }: Props) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    // @ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDNAME,
        uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
        sources: ["local", "url", "camera", "facebook", "instagram"],
        multiple: true,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#F5F5F5",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1",
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Fira+Sans",
              active: true,
            },
          },
        },
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImage((prev: any) => [...prev, result.info.secure_url]);
        }
      }
    );
  }, []);

  return (
    <div>
      <Button
        className="m-0"
        variant="ghost"
        onClick={(e) => {
          e.preventDefault();
          // @ts-ignore
          widgetRef.current.open();
        }}
      >
        Upload Images
      </Button>
    </div>
  );
}
