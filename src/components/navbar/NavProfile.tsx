import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../../../components/ui/button";
import { useUser } from "../../contexts/userContext";

export function NavProfile() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    const response = await fetch("http://localhost:4000/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    toast.info("You are now logged out");
    setUser(null);
  };

  if (user?.username) {
    return (
      <div>
        <Button variant="ghost" asChild>
          <Link to="/profile">Profile</Link>
        </Button>
        <Button variant="ghost" onClick={handleLogout}>
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button variant="ghost" asChild>
        <Link to="/login">Sign In</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link to="/register">Sign Up</Link>
      </Button>
    </div>
  );
}
