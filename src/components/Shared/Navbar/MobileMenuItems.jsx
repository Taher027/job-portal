import { Link, NavLink } from "react-router-dom";
import { navItems } from "./navItem";

const MobileMenuItems = ({ isMenuOpen }) => {
  return (
    <div
      className={`px-5 py-5 rounded-md bg-black/90 md:hidden ${
        isMenuOpen ? "block " : "hidden "
      }`}
    >
      <ul>
        {navItems?.map(({ path, title }) => (
          <li
            key={path}
            className="text-base text-white first:text-white py-1 font-semibold"
          >
            <NavLink
              to={path}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primaryColor font-semibold"
                  : ""
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
        <li className="text-white py-1">
          <Link to="/login" className="font-semibold text-base">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuItems;
