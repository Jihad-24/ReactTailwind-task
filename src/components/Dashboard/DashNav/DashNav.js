import React from "react";
import { NavLink } from "react-router-dom";

const DashNav = () => {
  return (
    <nav className="flex items-center  px-4 py-2 justify-around bg-white shadow-md">
      <div className="rounded-2xl px-3 text-md py-4 flex items-center text-center">
        <ul className="flex items-center justify-between gap-2 text-slate-900">
          <li className="cursor-pointer  rounded-full  px-6 py-2  hover:bg-[#E1EEFF] hover:font-semibold hover:text-[#152B8E] ">
            <NavLink to={"/dashboard"}>Account</NavLink>
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2  hover:bg-[#E1EEFF] hover:font-semibold hover:text-[#152B8E]">
            <NavLink to={"/dashboard"}>Security</NavLink>
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2  hover:bg-[#E1EEFF] hover:font-semibold hover:text-[#152B8E]">
            <NavLink to={"/dashboard"}>Data & Privacy</NavLink>
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2  hover:bg-[#E1EEFF] hover:font-semibold hover:text-[#152B8E]">
            <NavLink to={"/dashboard"}>Payments</NavLink>
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2  hover:bg-[#E1EEFF] hover:font-semibold hover:text-[#152B8E]">
            <NavLink to={"/dashboard"}>Notifications</NavLink>
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2  bg-[#E1EEFF] font-semibold text-[#152B8E]">
            <NavLink to={"/dashboard"}>Seller Tools</NavLink>
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2  hover:bg-[#E1EEFF] hover:font-semibold hover:text-[#152B8E]">
            <NavLink to={"/dashboard"}>
              Statements and <br /> taxes
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashNav;
