import Container from "../Container/Container";
import { LuUserPlus } from "react-icons/lu";
import { LuUserMinus2 } from "react-icons/lu";

import Logo from "../Logo/Logo";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SelectRole = () => {
  const [role, setRole] = useState("");

  console.log(role);
  return (
    <div className="relative bg-gray-100 ">
      <Container>
        {/* logo */}
        <div className="absolute top-5">
          <Logo />
        </div>
        <div className="pt-20 md:pt-32  flex flex-col  items-center min-h-screen">
          <h2 className="text-3xl font-bold text-secondaryColor">
            Join as a client or freelancer
          </h2>
          <div className="grid gird-cols-1 md:grid-cols-2 mt-12  justify-center items-center gap-8 box-border ">
            <div
              onClick={() => setRole("client")}
              className={`border-2 w-64 border-gray-300 hover:scale-105    hover:cursor-pointer   hover:border-primaryColor p-6 rounded-md bg-white shadow-sm  transition-all duration-300 ${
                role === "client" ? "border-primaryColor" : ""
              }`}
            >
              <div className="flex mb-5 w-full justify-between items-center">
                <LuUserMinus2 size={32} className="text-primaryColor " />

                <div
                  className={`w-3 h-3 rounded-full border-spacing-0.5 border-primaryColor ring-2 ring-offset-2 ring-secondaryColor  ${
                    role === "client" ? "bg-primaryColor" : "bg-gray-300 "
                  }`}
                ></div>
              </div>
              <h4 className="text-2xl text-secondaryColor font-semibold">
                I&apos;m a client, hiring for a project
              </h4>
            </div>
            <div
              onClick={() => setRole("freelancer")}
              className={`border-2 w-64 border-gray-300 hover:scale-105    hover:cursor-pointer   hover:border-primaryColor p-6 rounded-md bg-white shadow-sm  transition-all duration-300 ${
                role === "freelancer" ? "border-primaryColor" : ""
              }`}
            >
              <div className="flex mb-5 w-full justify-between items-center">
                <LuUserPlus size={32} className="text-primaryColor" />
                <div
                  className={`w-3 h-3 rounded-full border-spacing-0.5 border-primaryColor ring-2 ring-offset-2 ring-secondaryColor  ${
                    role === "freelancer" ? "bg-primaryColor" : "bg-gray-300 "
                  }`}
                ></div>
              </div>
              <h4 className="text-2xl text-secondaryColor font-semibold">
                I&apos;m a freelancer, looking for work
              </h4>
            </div>
          </div>

          <div className="mt-10 w-52">
            <Link to="/signup">
              {" "}
              <Button
                disabled={!role}
                label={`${
                  role === "client"
                    ? "Join as client"
                    : role === "freelancer"
                    ? "Apply as freelancer"
                    : "Create Account"
                }`}
                width
              />
            </Link>
          </div>
          <p className="text-2xl font-light mt-5">
            Already have an account?{" "}
            <Link to="/login">
              <strong className="underline font-2xl">Login</strong>
            </Link>{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SelectRole;
