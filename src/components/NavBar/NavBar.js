import React from "react";
import Logo from "../../images/PayPal-icon-white-png-vertical.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import DrawerRoute from "./DrawerRoute";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <div className=" flex items-center justify-between md:hidden  h-16 ">
        <div className="flex justify-start items-center">
          <DrawerRoute></DrawerRoute>
          <div className="justify-start flex">
            <Link to="/">
              {" "}
              <div className=" rounded-2xl px-3 text-sm py-4  text-[#D3F1FF] hover:text-white flex items-center text-center justify-center gap-3">
                <img
                  className="w-4  text-[#D3F1FF] hover:text-white"
                  src={Logo}
                  alt=""
                />
                <h1 className="italic">Pay<span className="text-[#08A0E1]">pal</span></h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <nav className="hidden md:flex items-center justify-between  px-4 py-2 text-[#D3F1FF] hover:text-white">
        <div className="scale-100 rounded-2xl px-3 text-sm py-4  text-[#D3F1FF] hover:text-white flex items-center text-center justify-center gap-5">
          <img
            className="w-6 text-[#D3F1FF] hover:text-white"
            src={Logo}
            alt=""
          />
          <ul className="flex items-center justify-between gap-2 text-slate-900">
            <li className="cursor-pointer  rounded-full  px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600 ">
              Dashboard
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
              Finances
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
              Send and Request
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
              Deals
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
              Wallet
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
              Activity
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
              Help
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <li className="cursor-pointer list-none text-md rounded-full py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li className="cursor-pointer list-none text-md rounded-full py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
            <FontAwesomeIcon icon={faCog} />
          </li>
          <li className="cursor-pointer list-none text-sm rounded-full py-2 text-[#D3F1FF] hover:text-white hover:bg-sky-600">
            LOG OUT
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
