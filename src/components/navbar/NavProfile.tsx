import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { useUser } from "../../contexts/userContext";
import { Avatar, AvatarImage } from "../../../components/ui/avatar";
import { BellRing } from "lucide-react";
import { Star } from "lucide-react";
import { ProfileMenu } from "./ProfileMenu";
import { useState } from "react";

export function NavProfile() {
  const { user } = useUser();
  const [visible, setVisible] = useState(false);

  if (user?.username) {
    return (
      <div className="flex flex-row items-center gap-4 justify-center">
        <div className="text-gray-500 hover:text-gray-600 cursor-pointer transition">
          <Link to="/favorites">
            <Star size={16} />
          </Link>
        </div>
        <div className="text-gray-500 hover:text-gray-600 cursor-pointer transition">
          <Link to="/notifications">
            <BellRing size={16} />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer relative">
          <Avatar>
            <AvatarImage
              src="/profile.jpg"
              onClick={() => setVisible((prev) => !prev)}
            />
          </Avatar>
          <ProfileMenu visible={visible} setVisible={setVisible}/>
        </div>
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
