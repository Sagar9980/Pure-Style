import Navbar from "Components/Navbar";

import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>This is Footer</footer>
    </div>
  );
};
