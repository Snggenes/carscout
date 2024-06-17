import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Subscription() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.info("This feature is not available yet.");
    navigate("/");
  }, [navigate]);

  return null;
}
