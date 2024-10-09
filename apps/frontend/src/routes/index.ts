import UserRoutes from "routes/user/user-routes";
import PublicRoutes from "routes/public/PublicRoutes";
import { useRoutes } from "react-router-dom";
import { useUserReducers } from "hooks/user/useUserReducers";

export default function Routes() {
  const { user } = useUserReducers();

  console.log(user);

  if (user) {
    return useRoutes([UserRoutes]);
  }

  return useRoutes([PublicRoutes]);
}
