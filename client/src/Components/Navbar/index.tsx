import { MainContainer } from "Container/MainContainer";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "Assets/icons/cart.svg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <MainContainer>
        <div className="flex items-center h-[70px] justify-between w-full">
          <div className="relative top-[6px]">
            <img src="/logo-no-background.png" alt="logo" width={110} />
          </div>
          <ul className="cursor-pointer text-sm text-eerieBlack">
            <Link to="/">
              <li className="cursor-pointer block lg:inline-block hover:text-jet mr-4">
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li className="cursor-pointer block lg:inline-block hover:text-jet mr-4">
                Shop
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer block lg:inline-block hover:text-jet mr-4">
                About
              </li>
            </Link>
            <Link to="Contact">
              <li className="cursor-pointer block lg:inline-block hover:text-jet">
                Contact
              </li>
            </Link>
          </ul>
          <div>
            <CartIcon />
          </div>
        </div>
      </MainContainer>
    </nav>
  );
};

export default Navbar;
