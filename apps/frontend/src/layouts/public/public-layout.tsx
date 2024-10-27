import Navbar from "layouts/public/components/navbar/navbar";
import { Outlet } from "react-router-dom";
import BackgroundCodes from "components/shared/background-codes/background-codes";

export default function PublicLayout() {
  return (
    <div className="bg-black-500 min-h-[100vh] relative">
      <div className="absolute inset-0 z-0">
        <BackgroundCodes />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
