import { NavLink } from "react-router-dom";
import { MainContainer } from "Container/MainContainer";
import DropdownContent from "./DropdownContent";
import { ReactComponent as ChevronUp } from "Assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "Assets/icons/chevron-down.svg";

const MenuItem = ({
  label,
  href,
  children,
  onToggle,
  active,
  setIsDrawerOpen,
}: any) => {
  const handleClick = () => {
    // Blur the active element to lose focus
    const activeElement: any = document.activeElement;
    activeElement.blur();
  };

  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false);
            handleClick();
          }}
        >
          {label}
        </NavLink>
        {children && (
          <button
            className="md:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? "true" : "false"}
          >
            {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      {children && (
        <div
          role="menu"
          className={`dropdown ${
            active ? "h-auto" : "h-0 overflow-hidden md:h-auto"
          }`}
        >
          <MainContainer>
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </MainContainer>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
