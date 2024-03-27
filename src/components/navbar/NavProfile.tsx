import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

import { Button } from "../../../components/ui/button";

export function NavProfile() {
  let user = 'abc'
  if (user) {
    return (
      <div>
        <Loader className="h-5 w-5"/>
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
