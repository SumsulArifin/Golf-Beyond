
import { MENUS } from "../constants/Menu";
import Images from "../assets/images";
import { NavLink } from "react-router-dom";
// import Images from '../assets/images/index'

const MainHeader = () => {
  return (
    <header className="sticky -top-[100px] z-50">
      <div className="h-[100px] w-full bg-primary flex justify-center items-center px-10">
        <img
          className="w-auto h-full"
          src={Images.shadowGolfer}
          alt="Golf and beyond logo"
        />
      </div>
      <nav className="h-[65px] w-full bg-sedondaryLight flex justify-between items-center px-10">
        <div className="h-full w-auto">
          <a href="/">
            <img
              className="w-auto h-full"
              src={Images.logo}
              alt="Golf and beyond logo"
            />
          </a>
        </div>
        <div className="hidden w-full xl:block md:w-auto">
          <ul className="flex flex-col xl:flex-row items-center gap-4">
            {MENUS.map((menu) => (
              <li key={menu.id}>
                <NavLink className="block text-light hover:text-white" to={menu.path}>
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
