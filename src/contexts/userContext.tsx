import { createContext, useState, useContext, useEffect } from "react";
import { Loader } from "lucide-react";

import type { User } from "../../lib/types/types";
import useFetch from "@/hooks/useFetch";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const onSuccess = (data: any) => {
    setUser(data.user);
    setLoading(false);
  };

  const { performFetch } = useFetch("auth/profile", onSuccess);

  useEffect(() => {
    if (!user) {
      performFetch();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader size="2rem" />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
