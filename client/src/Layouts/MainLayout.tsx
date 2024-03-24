import Navbar from "Components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
