import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HamburgerMenu = ({ visible, setVisible }: Props) => {
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setTimeout(() => {
        setVisible(false);
      }, 120);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div ref={menuRef}>
      {visible ? (
        <div className="bg-white w-60 z-50 absolute top-11 left-0 flex flex-col text-black shadow-xl rounded-xl">
          <div className="flex flex-col gap-3">
            <Button
              variant="link"
              className="font-lg"
              onClick={() => {
                setVisible(false);
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              variant="link"
              className="font-lg"
              onClick={() => {
                setVisible(false);
                navigate("/");
              }}
            >
              Search
            </Button>
            <Button
              variant="link"
              className="font-lg"
              onClick={() => {
                setVisible(false);
                navigate("/sell");
              }}
            >
              Sell
            </Button>
            <Button
              variant="link"
              className="font-lg"
              onClick={() => {
                setVisible(false);
                navigate("/magazine");
              }}
            >
              Magazine
            </Button>
            <Button
              variant="link"
              className="font-lg"
              onClick={() => {
                setVisible(false);
                navigate("/subscription");
              }}
            >
              Subscription
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
