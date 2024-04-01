import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";

const DemoComponent = () => {
  return (
    <div className=" flex flex-col justify-top items-center mt-16">
      <div className="max-w-7xl w-full p-8 text-left">
        <h1 className="text-5xl font-bold text-stone-700 mb-4">
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faHome} />
          <span className="text-stone-600">World!</span>
        </h1>
        <p className="text-base text-gray-700">
          {" "}
          Cheers,
          <br />
          Start your project 🚀
        </p>
      </div>
    </div>
  );
};

export default DemoComponent;
