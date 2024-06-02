import { useLocation } from "react-router-dom";

export function AccountSidebar() {
  const location = useLocation();

  const matchClassname = "text-blue-300 border  p-4 text-base cursor-pointer bg-white";
    const noMatchClassname = "text-black-300 border p-4 text-base cursor-pointer bg-white";

  return (
    <div className="flex flex-col gap-0 w-full pt-36">
      <p
        className={
          location.pathname === "/account"
            ? matchClassname
            : noMatchClassname
        }
      >
        Overview
      </p>
      <p
        className={
          location.pathname === "/account/favorites"
          ? matchClassname
          : noMatchClassname
        }
      >
        Favorites
      </p>
      <p
        className={
          location.pathname === "/account/searches"
          ? matchClassname
          : noMatchClassname
        }
      >
        Saved searches
      </p>
      <p
        className={
          location.pathname === "/account/listings"
          ? matchClassname
          : noMatchClassname
        }
      >
        Advertisement
      </p>
      <p
        className={
          location.pathname === "/account/appointments"
          ? matchClassname
          : noMatchClassname
        }
      >
        Fast sales appointments
      </p>
      <p
        className={
          location.pathname === "/account/notifications"
          ? matchClassname
          : noMatchClassname
        }
      >
        Notifications
      </p>
      <p
        className={
          location.pathname === "/account/settings"
          ? matchClassname
          : noMatchClassname
        }
      >
        Settings
      </p>
    </div>
  );
}
