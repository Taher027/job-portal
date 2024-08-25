// import { Outlet } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
