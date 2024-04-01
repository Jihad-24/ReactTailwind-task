import React from "react";
import NameLogo from "../../images/PAYPAL_LOGO_480x480.webp";
const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col gap-5 bg-white py-4 md:px-10 lg:px-32 rounded-t-2xl md:flex-row md:gap-16 items-center shadow-xl border-b-4 border-yellow-50">
        <aside className="flex items-center justify-center gap-3 text-xl">
          <img className="w-32" src={NameLogo} alt="" />
        </aside>
        <nav className="text-lg">
          <ul className="flex h-full items-center justify-center gap-3">
            <li>
              <button className="cursor-pointer hover:underline">Help</button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">
                Contact Us
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">
                Security
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">Fees</button>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="bg-white text-center text-sm flex flex-col gap-5 py-5 md:px-10 lg:px-32  md:flex-row md:gap-16 items-center">
        <p className="text-[#9e9d9d]">
          &copy; 1999-2022 PayPal, Inc. All Rights Reserved.
        </p>
        <nav className="text-lg">
          <ul className="flex h-full items-center justify-center gap-3">
            <li>
              <button className="cursor-pointer hover:underline">
                Privacy
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">Legal</button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">
                Policy Updates
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </footer>
  );
};

export default Footer;
