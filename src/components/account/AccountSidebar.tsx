import { useLocation, useNavigate } from "react-router-dom";

export function AccountSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const matchClassname =
    "text-blue-300 border  p-4 text-base cursor-pointer bg-white";
  const noMatchClassname =
    "text-black-300 border p-4 text-base cursor-pointer bg-white";

  return (
    <div className="flex flex-col gap-0 w-full pt-36 pl-4">
      <p
        className={
          location.pathname === "/account" ? matchClassname : noMatchClassname
        }
        onClick={() => navigate("/account")}
      >
        Overview
      </p>
      <p
        className={
          location.pathname === "/account/favorites"
            ? matchClassname
            : noMatchClassname
        }
        onClick={() => navigate("/account/favorites")}
      >
        Favorites
      </p>
      <p
        className={
          location.pathname === "/account/searches"
            ? matchClassname
            : noMatchClassname
        }
        onClick={() => navigate("/account/searches")}
      >
        Saved searches
      </p>
      <p
        className={
          location.pathname === "/account/listings"
            ? matchClassname
            : noMatchClassname
        }
        onClick={() => navigate("/account/listings")}
      >
        Advertisement
      </p>
      <p
        className={
          location.pathname === "/account/appointments"
            ? matchClassname
            : noMatchClassname
        }
        onClick={() => navigate("/account/appointments")}
      >
        Fast sales appointments
      </p>
      <p
        className={
          location.pathname === "/account/notifications"
            ? matchClassname
            : noMatchClassname
        }
        onClick={() => navigate("/account/notifications")}
      >
        Notifications
      </p>
      <p
        className={
          location.pathname === "/account/settings"
            ? matchClassname
            : noMatchClassname
        }
        onClick={() => navigate("/account/settings")}
      >
        Settings
      </p>
    </div>
  );
}
