import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { useUser } from "../../contexts/userContext";

export function NavProfile() {
  const { user } = useUser();

  if (user?.username) {
    return (
      <div>
        <Button variant="ghost" asChild>
          <Link to="/profile">Profile</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <Button variant="ghost" asChild>
        <Link to="/login">Sign In</Link>
      </Button>
    </div>
  );
}
