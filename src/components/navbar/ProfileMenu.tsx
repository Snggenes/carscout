import { useUser } from "@/contexts/userContext";
import { toast } from "react-toastify";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

type ProfileMenuProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProfileMenu = ({ visible, setVisible }: ProfileMenuProps) => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data) {
      setVisible(false);
      toast.info("You are now logged out");
      setUser(null);
      navigate("/");
    }
  };

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
        <div className="bg-white w-60 z-50 absolute top-11 right-0 flex flex-col text-black shadow-xl rounded-xl">
          <div className="flex flex-col gap-3">
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account");
              }}
            >
              Overview
            </Button>
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account/favorites");
              }}
            >
              Favorites
            </Button>
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account/searches");
              }}
            >
              Saved searches
            </Button>
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account/listings");
              }}
            >
              Advertisement
            </Button>
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account/appointments");
              }}
            >
              Fast sales appointments
            </Button>
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account/notifications");
              }}
            >
              Notifications
            </Button>
            <Button
              variant="link"
              className="font-normal"
              onClick={() => {
                setVisible(false);
                navigate("/account/settings");
              }}
            >
              Settings
            </Button>
            <hr />
            <Button
              variant="link"
              className="font-normal"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
