import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";

const Login = () => {
  return (
    <div className="bg-gray-100 relative">
      <Container>
        <div className="absolute top-5 ">
          <Logo />
        </div>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white shadow-md  text-secondaryColor">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-3xl md:text-4xl font-bold">Log In</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form className="space-y-6 ">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primaryColor bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primaryColor bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primaryColor w-full rounded-md py-3 text-white"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="px-6 mt-5 text-sm text-center text-gray-400">
              Don&apos;t have an account yet?{" "}
              <Link
                to="/select-role"
                className="hover:underline hover:text-primaryColor hover:font-medium transition-colors duration-100  text-gray-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
