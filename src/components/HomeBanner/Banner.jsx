import { CiLocationOn } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import Container from "../Container/Container";

const Banner = ({ query, handleInputChange }) => {
  console.log(query);

  return (
    <div className="  bg-banner-bg bg-cover ">
      <Container>
        <div className="md:py-20 py-14">
          <h1 className="text-5xl font-bold mb-3">
            Find your <span className="text-btnPrimaryColor">new job</span>{" "}
            today
          </h1>
          <p className="text-lg text-primary/70 mb-8 font-normal">
            Thousands of jobs in the ICT development sectors are waiting for
            you!
          </p>
          <form>
            <div className=" flex flex-col justify-start gap-4 md:flex-row md:gap-0 ">
              <div className="flex md:rounded-s-md shadow-sm ring-1 ring-inset ring-gray=300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="What position are you looking for?"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900"
                  value={query}
                />
                <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
              </div>
              <div className="flex md:rounded-s-none shadow-sm ring-1 ring-inset ring-gray=300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="What position are you looking for?"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900"
                  value={query}
                />
                <CiLocationOn className="absolute mt-2.5 ml-2 text-gray-400" />
                <button className="bg-btnPrimaryColor text-white px-8 py-2 rounded-s-none rounded-e-md">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
