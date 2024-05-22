import { createContext, useState, useContext, useEffect } from "react";
import Loading from "../components/Loading"
import type { User } from "../lib/types/types";
import useFetch from "@/hooks/useFetch";

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
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
    setUser(data.safeUser);
    // console.log(data.safeUser);
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
        <Loading />
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
