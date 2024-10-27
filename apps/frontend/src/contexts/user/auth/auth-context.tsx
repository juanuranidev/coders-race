import axios from "axios";
import { User } from "lib/interfaces/user/user.interfaces";
import FullScreenLoader from "components/ui/full-screen-loader/full-screen-loader";
import { useUserReducers } from "hooks/user/useUserReducers";
import { readUserInSession } from "services/user/auth/user.auth";
import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext<object>({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setUser } = useUserReducers();

  const checkUserSession = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const userInSession: User | null = await readUserInSession();

      if (userInSession) {
        setUser(userInSession);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${userInSession.authId}`;
      }
    } catch (error) {
      console.error("Error reading user session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  if (isLoading) return <FullScreenLoader />;

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
