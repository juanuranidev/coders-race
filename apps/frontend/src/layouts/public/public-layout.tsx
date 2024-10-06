import Navbar from "layouts/public/components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUserReducers } from "hooks/user/useUserReducers";
import { readUserInSession } from "services/user/auth/user.auth";

export default function PublicLayout() {
  const { setUser } = useUserReducers();

  const handleReadUserInSession = async (): Promise<void> => {
    try {
      const userInSession = await readUserInSession();

      if (userInSession) {
        setUser(userInSession);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleReadUserInSession();
  }, []);

  return (
    <div className="bg-black-500 min-h-[100vh]">
      <Navbar />
      <div className="container mx-auto px-0 pt-10">
        <Outlet />
      </div>
    </div>
  );
}
