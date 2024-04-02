import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBook,
  faDesktop,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contents = () => {
  return (
    <div className="md:px-16 lg:px-24">
      <div className="py-10">
        <h1 className="text-2xl md:text-4xl">Seller Tools</h1>
        <p className="text-[#7a7a7a]">
          Sell online easily and grow your business with Seller Tools. Create
          PayPal <br /> buttons, get instant payment notifications, and do much
          more.
        </p>
      </div>
      <div className="ml-10 pb-10">
        <h1 className="text-xl md:text-2xl">Selling Online</h1>
        <p className="text-[#7a7a7a]">
          Grow your business by making it easier for your customers to pay you.
        </p>
        <div className="pt-5">
          <div>
            <div className="border-2 flex flex-col justify-between items-center md:flex-row p-3 gap-3 rounded-xl max-w-[820px] shadow-sm">
              <div>
                <FontAwesomeIcon
                  className="bg-[#F8F4E8] rounded-full py-4 px-5 text-[#152B8E]"
                  icon={faPaypal}
                  size="2xl"
                />
              </div>
              <div className="">
                <h1 className="text-md md:text-lg">PayPal buttons</h1>
                <p className="text-[#7a7a7a]">
                  Create and manage secure buttons for your customers to add
                  items to their chart, buy, donate or subscribe.
                </p>
              </div>
              <button className="text-[#1472EA]">Manage</button>
            </div>
          </div>
          <div className="py-3">
            <div className="border-2 flex flex-col items-center justify-between md:flex-row p-3 gap-3 rounded-xl max-w-[820px] shadow-sm">
              <div>
                <FontAwesomeIcon
                  className="bg-[#F8F4E8] rounded-full p-4 text-[#152B8E]"
                  icon={faDesktop}
                  size="2xl"
                />
              </div>
              <div className="">
                <h1 className="text-md md:text-lg">Website Preferences</h1>
                <p className="text-[#7a7a7a]">
                  Controlhow you sell online by turning on express checkouts and
                  bringing customers back to your website after they pay with
                  PayPal.
                </p>
              </div>
              <button className="text-[#1472EA]">Update</button>
            </div>
          </div>
          <div className="">
            <div className="border-2 flex flex-col items-center justify-between md:flex-row p-3 gap-3 rounded-xl max-w-[820px] shadow-sm">
              <div className="flex gap-3 flex-col md:flex-row items-center">
                <div>
                  <FontAwesomeIcon
                    className="bg-[#F8F4E8] rounded-full p-4 text-[#1472EA]"
                    icon={faBell}
                    size="2xl"
                  />
                </div>
                <div className="">
                  <h1 className="text-md md:text-lg">
                    Instant payment notifications
                  </h1>
                  <p className="text-[#7a7a7a]">
                    Stay informed by turning on notifications for payments made
                    on your website.
                  </p>
                </div>
              </div>
              <button className="text-[#1472EA]">Update</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 pb-10">
        <h1 className="text-xl md:text-2xl">Getting Paid</h1>
        <p className="text-[#7a7a7a]">
          Choose from variouspayment tools to attract your customers.
        </p>
        <div className="pt-5">
          <div className="border-2 flex flex-col items-center justify-between md:flex-row p-3 gap-3 rounded-xl max-w-[820px] shadow-sm">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <div>
                <FontAwesomeIcon
                  className="bg-[#F8F4E8] rounded-full p-4 text-[#1472EA]"
                  icon={faBook}
                  size="2xl"
                />
              </div>
              <div className="">
                <h1 className="text-md md:text-lg">Invoices</h1>
                <p className="text-[#7a7a7a]">
                  Create professional invoices and customize it as per your
                  requirements.
                </p>
              </div>
            </div>
            <button className="text-[#1472EA]">Manage</button>
          </div>
        </div>
      </div>
      <div className="ml-10 pb-10">
        <h1 className="text-xl md:text-2xl">More selling tools</h1>
        <p className="text-[#7a7a7a]">
          Choose from various payment tools to attract your customers.
        </p>
        <div className="pt-5">
          <div className="border-2 flex flex-col items-center justify-between md:flex-row p-3 gap-3 rounded-xl max-w-[820px] shadow-sm">
            <div className="flex gap-3 flex-col md:flex-row items-center">
              <div>
                <FontAwesomeIcon
                  className="bg-[#F8F4E8] rounded-full p-4 text-[#1472EA]"
                  icon={faTruck}
                  size="2xl"
                />
              </div>
              <div className="">
                <h1 className="text-md md:text-lg">Shipping preferences</h1>
                <p className="text-[#7a7a7a]">
                  Create your shipping labels for hassle-free returns.
                </p>
              </div>
            </div>
            <button className="text-[#1472EA]">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
