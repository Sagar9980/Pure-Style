import Navbar from "Components/Navbar";

import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <header>
        <Navbar />
      </header>
      <div>
        <Outlet />
      </div>
      <footer>This is Footer</footer>
    </div>
  );
};
