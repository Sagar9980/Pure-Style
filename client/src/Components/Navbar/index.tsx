import { MainContainer } from "Container/MainContainer";
import { ReactComponent as ShoppingBagIcon } from "Assets/icons/shopping-bag.svg";
import { ReactComponent as SearchIcon } from "Assets/icons/search.svg";
import { ReactComponent as FavouriteIcon } from "Assets/icons/heart.svg";
import { ReactComponent as ProfileIcon } from "Assets/icons/profile.svg";
import { ReactComponent as HamBurgerMenuIcon } from "Assets/icons/hamburger.svg";
import { useRef, useState } from "react";
import MegaMenu from "./MegaMenu.tsx";
import "./MegaMenu.css";
import MobileNavigationDrawer from "./MobileNavigationDrawer.tsx";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerButtonRef = useRef(null);

  return (
    <header className="bg-white shadow">
      <MainContainer>
        <div className="flex items-center h-[70px] justify-between">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <HamBurgerMenuIcon />
          </button>
          <div className="relative top-[6px]">
            <img src="/logo-no-background.png" alt="logo" width={110} />
          </div>
          {/* <ul className=" flex gap-6 cursor-pointer text-eerieBlack">
            <NavLink to="/">
              <li className="cursor-pointer block hover:text-jet hover:underline">
                Home
              </li>
            </NavLink>
            <NavLink to="/shop">
              <li className="cursor-pointer block hover:text-jet hover:underline">
                Shop
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="cursor-pointer block hover:text-jet hover:underline">
                About
              </li>
            </NavLink>
            <NavLink to="Contact">
              <li className="cursor-pointer block hover:text-jet hover:underline">
                Contact
              </li>
            </NavLink>
          </ul> */}
          <div className="hidden md:block">
            <MegaMenu />
          </div>
          <div className="flex gap-4">
            <SearchIcon />
            <FavouriteIcon />
            <ShoppingBagIcon />
            <ProfileIcon />
          </div>
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default Navbar;
