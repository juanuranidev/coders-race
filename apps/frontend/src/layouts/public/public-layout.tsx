import Navbar from "layouts/public/components/navbar/navbar";
import axios from "axios";
import { User } from "lib/interfaces/user/user.interfaces";
import { Outlet } from "react-router-dom";
import FullScreenLoader from "components/ui/full-screen-loader/full-screen-loader";
import { useUserReducers } from "hooks/user/useUserReducers";
import { readUserInSession } from "services/user/auth/user.auth";
import { useEffect, useState } from "react";
import BackgroundCodes from "components/shared/background-codes/background-codes";

export default function PublicLayout() {
  const { setUser } = useUserReducers();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleReadUserInSession = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const userInSession: User | null = await readUserInSession();

      if (userInSession) {
        console.log(userInSession);
        setUser(userInSession);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${userInSession.authId}`;
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadUserInSession();
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="bg-black-500 min-h-[100vh] relative">
      <div className="absolute inset-0 z-0">
        <BackgroundCodes />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-0 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
