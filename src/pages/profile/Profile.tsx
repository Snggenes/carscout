import { useUser } from "@/contexts/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.username) {
      navigate("/login");
    }
  }, []);
  
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
