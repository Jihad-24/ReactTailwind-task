import React from "react";
import Contents from "./Contents/Contents";
import DashNav from "./DashNav/DashNav";

const Dashboard = () => {
  return (
    <div className="shadow-xl border-b-4 pb-10 md:pb-20 lg:pb-32 border-yellow-50">
      <DashNav />
      <Contents />
    </div>
  );
};

export default Dashboard;
