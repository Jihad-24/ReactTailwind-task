import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="bg-[#E1EEFF] max-w-[1440px] mx-auto">
      <div className="bg-[#152B8E] md:px-16 lg:px-24">
        <NavBar />
      </div>
      <div className="mx-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
