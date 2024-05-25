import { useUser } from "@/contexts/userContext";
import { toast } from "react-toastify";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";

type ProfileMenuProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProfileMenu = ({ visible, setVisible }: ProfileMenuProps) => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', {
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
    <div>
      {visible ? (
        <div className="bg-white w-24 z-50 absolute top-12 right-0 flex flex-col text-black">
          <div className="flex flex-col gap-3">
            <Button variant="ghost" asChild>
              <Link to="/profile">Profile</Link>
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
