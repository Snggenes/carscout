import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/userContext";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavHamburger({ visible, setVisible }: Props) {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  if (!visible) {
    return null;
  }

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

  return (
    <div className="absolute top-11 left-0 h-screen w-screen bg-[#F4F4F4] z-50 inset-0 flex flex-col gap-4">
      <div className="mx-4 mt-4 w-full bg-white flex flex-row p-4 pr-16 justify-between border">
        <div className="flex flex-row gap-1 items-center">
          <img width={24} src="/profile.jpg" alt="" />
          <p
            className="text-black"
            onClick={() => {
              navigate("/account");
              setVisible(false);
            }}
          >
            My Carsout
          </p>
        </div>
        <p
          className="font-semibold text-black"
          onClick={() => {
            if (user?.username) {
              handleLogout();
            } else {
              navigate("/login");
              setVisible(false);
            }
          }}
        >
          {user?.username ? "Logout" : "Login"}
        </p>
      </div>
      <div className="mx-4 w-full bg-white flex flex-col">
        <div className="flex flex-row justify-between p-4 pr-16 border"
            onClick={() => {
                navigate("/");
                setVisible(false);
            }}
        >
          <p className="text-black">Search</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div className="flex flex-row justify-between p-4 pr-16 border-b"
            onClick={() => {
                navigate("/sell");
                setVisible(false);
            }}
        >
          <p className="text-black">Sell</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div className="flex flex-row justify-between p-4 pr-16 border-b"
            onClick={() => {
                navigate("/magazine");
                setVisible(false);
            }}
        >
          <p className="text-black">Magazine</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div className="flex flex-row justify-between p-4 pr-16 border-b"
            onClick={() => {
                navigate("/subscription");
                setVisible(false);
            }}
        >
          <p className="text-black">Subscription</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
      </div>
      <div className="mx-4 w-full bg-white flex flex-col">
        <div
          className="flex flex-row justify-between p-4 pr-16 border"
          onClick={() => {
            navigate("/account/favorites");
            setVisible(false);
          }}
        >
          <p className="text-black">Favorites</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div
          className="flex flex-row justify-between p-4 pr-16 border-b"
          onClick={() => {
            navigate("/account/searches");
            setVisible(false);
          }}
        >
          <p className="text-black">Saved searches</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div
          className="flex flex-row justify-between p-4 pr-16 border-b"
          onClick={() => {
            navigate("/account/notifications");
            setVisible(false);
          }}
        >
          <p className="text-black">Advertisement</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div
          className="flex flex-row justify-between p-4 pr-16 border-b"
          onClick={() => {
            navigate("/account/appointments");
            setVisible(false);
          }}
        >
          <p className="text-black">Fast sales appointments</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div
          className="flex flex-row justify-between p-4 pr-16 border-b"
          onClick={() => {
            navigate("/account/notifications");
            setVisible(false);
          }}
        >
          <p className="text-black">Notifications</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
        <div
          className="flex flex-row justify-between p-4 pr-16 border-b"
          onClick={() => {
            navigate("/account/settings");
            setVisible(false);
          }}
        >
          <p className="text-black">Settings</p>
          <p className="font-semibold text-black">
            <ArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
}
