import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
import Logo from "../../images/PAYPAL_LOGO_480x480.webp";

const DrawerRoute = () => {
  const [isUser, setIsUserOpen] = useState(false);
  const toggleDrawer = () => {
    setIsUserOpen((prevState) => !prevState);
  };
  return (
    <>
      <div onClick={toggleDrawer} className="lg:hidden block">
        <div
          tabIndex={0}
          role="button"
          className=" p-2 btn btn-ghost text-white rounded-xl "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </div>
      <Drawer
        open={isUser}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <ul
          tabIndex={0}
          className=" py-4 text-lg font-semibold text-center flex flex-col items-center justify-center text-[#152B8E]  w-full"
        >
          <li>
            <Link to="/" className="block py-2 px-4 hover:text-[#0360D9]">
              <img
                className="w-20 text-[#D3F1FF] hover:text-white"
                src={Logo}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[60px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[70px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Finances
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[30px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Send and Request
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[90px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Deals
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[85px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[80px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Activity
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-[90px] cursor-pointer hover:text-white hover:bg-sky-600"
            >
              Help
            </Link>
          </li>
          <li className="block py-2 px-[70px] bg-[#152B8E] cursor-pointer text-white hover:bg-sky-600">
            LOG OUT
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default DrawerRoute;
