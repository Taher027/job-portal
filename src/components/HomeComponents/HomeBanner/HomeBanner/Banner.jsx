import { CiLocationOn } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import Container from "../../../Container/Container";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

const Banner = ({ handleInputChange, handleSubmit }) => {
  return (
    <div className="  bg-banner-bg bg-cover bg-center h-auto  bg-white ">
      <Container>
        <div className="md:py-20 py-14">
          <h1 className="text-3xl  md:text-5xl font-bold mb-3 text-secondaryColor">
            Find your <span className="text-primaryColor">new job</span> today
          </h1>
          <p className="text-lg text-secondaryColor/70 mb-8 font-normal">
            Thousands of jobs in the ICT development sectors are waiting for
            you!
          </p>
          <form onClick={handleSubmit}>
            <div className="flex flex-col justify-start items-center md:flex-row md:gap-0 gap-5">
              <div className=" w-full md:md:w-5/12">
                <Input
                  name="searchTerm"
                  id="searchTerm"
                  handleInputChange={handleInputChange}
                  placeholder={"What place are you Looking for"}
                  icon={FiSearch}
                />
              </div>
              <div className=" w-full  md:md:w-5/12">
                <Input
                  name="location"
                  id="location"
                  handleInputChange={handleInputChange}
                  placeholder={"Which place do you prefer?"}
                  icon={CiLocationOn}
                />
              </div>
              <div className="w-full md:w-2/12">
                <div className="w-full md:w-2/3">
                  <Button label="Search" notRoundedStart type="submit" width />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
