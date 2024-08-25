import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import FindWork from "../Pages/FindWork/FindWork";
import FindTalent from "../Pages/FindTalent/FindTalent";
import Enterprice from "../Pages/Enterprice/Enterprice";
import SelectRole from "../components/SelectRole/SelectRole";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-work",
        element: <FindWork />,
      },
      {
        path: "/find-talent",
        element: <FindTalent />,
      },
      {
        path: "/enterprice",
        element: <Enterprice />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/select-role",
    element: <SelectRole />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
