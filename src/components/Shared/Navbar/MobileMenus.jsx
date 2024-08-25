import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const MobileMenus = ({ handleToggleMenu, isMenuOpen }) => {
  return (
    <div className="block md:hidden transition-all duration-100">
      <button onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <FaXmark className=" w-5 h-5 text-secondaryColor " />
        ) : (
          <FaBarsStaggered className=" w-5 h-5 text-secondaryColor " />
        )}
      </button>
    </div>
  );
};

export default MobileMenus;
