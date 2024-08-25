import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenus from "./MobileMenus";
import { navItems } from "./navItem";
import MobileMenuItems from "./MobileMenuItems";
import Container from "../../Container/Container";
import Button from "../../Button/Button";
import Logo from "../../Logo/Logo";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center py-5">
          {/* logo  */}
          <Logo />
          {/* nav item for large device */}
          <ul className="hidden md:flex gap-12">
            {navItems?.map(({ path, title }) => (
              <li
                key={path}
                className="text-base text-secondaryColor font-semibold"
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
          </ul>
          {/* sign up and login button  */}
          <div className="text-base font-medium space-x-5 hidden lg:block">
            <Link to="/login">
              <Button label="Login" />
            </Link>
            <Link to="/select-role">
              <Button label="Sign up" />
            </Link>
          </div>

          {/* mobile menus  */}
          <MobileMenus
            navItems={navItems}
            handleToggleMenu={handleToggleMenu}
            isMenuOpen={isMenuOpen}
          />
        </nav>
        {/* mobile menus nav items  */}
        <MobileMenuItems isMenuOpen={isMenuOpen} />
      </Container>
    </header>
  );
};

export default Navbar;
