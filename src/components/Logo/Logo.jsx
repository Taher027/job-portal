import { Link } from "react-router-dom";
import { JobIcon } from "../Utils/JobIcon";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2 text-2xl  ">
      <JobIcon width={30} height={30} />
      <span className="font-semibold text-primaryColor">JobFusion</span>
    </Link>
  );
};

export default Logo;
