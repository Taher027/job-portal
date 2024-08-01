import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { JobIcon } from "../../utils";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Container from "../Container/Container";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center py-6">
          <Link to={"/"} className="flex items-center gap-2 text-2xl  ">
            <JobIcon width={30} height={30} />
            <span>Job Portal</span>
          </Link>
          {/* nav item for large device */}
          <ul className="hidden md:flex gap-12">
            {navItems?.map(({ path, title }) => (
              <li key={path} className="text-base text-primary font-semibold">
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* sign up and login button  */}
          <div className="text-base font-medium space-x-5 hidden lg:block">
            <Link
              to="/login"
              className="py-2 px-5 border rounded-md font-semibold bg-btnPrimaryColor text-white transition-colors duration-300 hover:bg-hover   "
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="py-2 px-5 border rounded-md font-semibold bg-btnPrimaryColor text-white transition-colors duration-300 hover:bg-hover  "
            >
              Sign up
            </Link>
          </div>

          {/* mobile menus  */}
          <div className="block md:hidden transition-all duration-75">
            <button onClick={handleToggleMenu}>
              {isMenuOpen ? (
                <FaXmark className=" w-5 h-5 text-primary " />
              ) : (
                <FaBarsStaggered className=" w-5 h-5 text-primary " />
              )}
            </button>
          </div>
        </nav>
        {/* mobile menus nav items  */}
        <div
          className={`px-5 py-5 rounded-sm bg-black/90 md:hidden ${
            isMenuOpen ? "block " : "hidden "
          }`}
        >
          <ul className="">
            {navItems?.map(({ path, title }) => (
              <li
                key={path}
                className="text-base text-white first:text-white py-1 font-semibold"
              >
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className="text-white py-1">
              <Link to="/login" className="font-semibold">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
