import { menuData } from "menuData";
import MenuItem from "./MenuItem";

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }: any) => {
  return (
    <div className="">
      <nav>
        <ul className="flex items-center leading-[70px]">
          {menuData.map(({ label, href, children }, index) => {
            return (
              <MenuItem
                key={index}
                {...{
                  label,
                  href,
                  children,
                  setIsDrawerOpen,
                }}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
