import Navbar from "layouts/public/components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="bg-background-dark min-h-[100vh]">
      <Navbar />
      <Outlet />
    </div>
  );
}
