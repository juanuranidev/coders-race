import { useRoutes } from "react-router-dom";
import PublicRoutes from "routes/public/PublicRoutes";

export default function Routes() {
  return useRoutes([PublicRoutes]);
}
