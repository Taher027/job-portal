import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    title,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    location,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    tags,
  } = data;
  return (
    <div className="border border-gray-200 bg-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-hoverBg">
      <div className="p-5">
        <h4 className="text-2xl text-primary font-semibold mb-2">{title}</h4>
        <strong className="text-base text-gray-400  ">{companyName}</strong>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 items-center mt-4 mb-3">
          <span className="text-base text-gray-400">
            <CiLocationOn /> {location}
          </span>
          <span className="text-base text-gray-400">
            <IoTimeOutline /> {employmentType}
          </span>
          <span className="text-base text-gray-400">
            <BsCurrencyDollar /> ${minPrice}-{maxPrice}K
          </span>
          <span className="text-base text-gray-400">
            <IoCalendarClearOutline /> {postingDate}
          </span>
        </div>
        <p className="text-base   text-justify">{description}</p>
        <div className="flex justify-start gap-10 mt-3">
          <p className="text-gray-400 font-semiBold ">
            Salary Type: {salaryType}
          </p>
          <p className="text-gray-400 font-semiBold flex items-center">
            Experienced Level: {experienceLevel}
          </p>
        </div>
        <div className="flex space-x-2 overflow-x-auto ">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 ">
          <Link
            to="/"
            className="py-2 px-3 border rounded-md font-normal text-sm bg-primaryColor text-white  transition-colors duration-300 hover:bg-hover  "
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
