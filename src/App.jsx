import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <footer>This footer</footer>
    </>
  );
}

export default App;
