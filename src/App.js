import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <div
      className={`max-w-[1440px] mx-auto ${
        isDashboardRoute ? "bg-white" : "bg-[#E1EEFF]"
      }`}
    >
      <div className="bg-[#152B8E] md:px-16 lg:px-24">
        <NavBar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
