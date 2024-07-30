import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import MySalary from "../Pages/MySalary/MySalary";

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
        path: "/salary",
        element: <MySalary />,
      },
    ],
  },
]);

export default router;
