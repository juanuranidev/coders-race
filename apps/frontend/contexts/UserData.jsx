import React, { useEffect, useState, createContext } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const { data } = useSession();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (data && data?.user) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data?.user?.token}`;
      setUserData(data?.user);
    }
  }, [data]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
