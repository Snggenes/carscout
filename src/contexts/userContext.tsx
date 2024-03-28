import { createContext, useState, useContext, useEffect } from "react";
import { Loader } from "lucide-react";

import type { User } from "../../lib/types/types";

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

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/profile");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchCurrentUser();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? children : 
      <div className=" h-screen w-screen flex items-center justify-center">
        <Loader size="50px" />
      </div>
      }
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
