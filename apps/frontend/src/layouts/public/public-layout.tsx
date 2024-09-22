import Navbar from "layouts/public/components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="bg-background-dark min-h-[100vh]">
      <Navbar />
      <div className="container mx-auto px-0 pt-10">
        <Outlet />
      </div>
    </div>
  );
}
