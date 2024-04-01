import React from "react";
import { faCheckCircle, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-1 pb-8 px-5  max-w-[400px] font-sans space-y-4 mt-3 mb-10 md:mb-20 lg:mb-40 flex flex-col justify-center items-center mx-auto bg-white">
      <div className="relative group">
        <FontAwesomeIcon
          className="text-green-400 text-[80px]"
          icon={faCheckCircle}
        />
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-xl text-gray-700">Your product link is ready</h1>
      </div>

      <p className="text-center text-md text-gray-600 pb-2 font-medium">
        You can spread the word by sharing this link on - email, social media,
        chat, whatsapp and more
      </p>
      <div className="flex justify-between gap-6 py-2">
        <FontAwesomeIcon
          className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full py-3 px-4 bg-[#0070B8] text-white text-xl"
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full py-3 px-3 bg-[#0070B8] text-white text-xl"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full p-3 bg-[#0070B8] text-white text-xl"
          icon={faQrcode}
        />
      </div>
      <button className="bg-[#0070B8] hover:scale-95 font-medium text-white w-full py-2 rounded-full hover:shadow-xl shadow-[0px_0px_10px_#E2DADA] t duration-500">
        Get link
      </button>
      <button className="hover:bg-[#0070B8] hover:scale-95 font-medium hover:text-white w-full py-2 rounded-full hover:shadow-xl shadow-[0px_0px_10px_#E2DADA] border border-[#0070B8] duration-500">
        <Link to={"/dashboard"}>Return to Dashboard</Link>
      </button>
    </div>
  );
};
export default Home;
