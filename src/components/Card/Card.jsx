import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;
  return (
    <div className="border border-gray-200 bg-white rounded-md ">
      <div className="p-5">
        <h3 className="text-2xl text-primary font-semibold mb-2">{jobTitle}</h3>
        <strong className="text-base text-gray-400  ">{companyName}</strong>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 items-center mt-4 mb-3">
          <span className="text-base text-gray-400">
            <CiLocationOn /> {jobLocation}
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
        <p className="text-base text-primary  text-justify">{description}</p>
        <div className="flex justify-start gap-10 mt-3">
          <p className="text-gray-400 font-semiBold ">
            Salary Type: {salaryType}
          </p>
          <p className="text-gray-400 font-semiBold flex items-center">
            Experienced Level: {experienceLevel}
          </p>
        </div>
        <div className="mt-5 ">
          <Link
            to="/"
            className="py-2 px-3 border rounded-md font-normal text-sm bg-btnPrimaryColor text-white  transition-colors duration-300 hover:bg-hover  "
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
