// Import dependencies
import React from "react";
import Header from "../components/Header";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Custom components
import HelpBox from "../components/HelpBox";

import profilePic from "./../pictures/profile.jpg";
import DashboardMenuItem from "../components/DashboardItem";

export default function Dashboard(props) {
  // update page title
  useUpdateTitle(props.title);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-neutral-100">
      <Header activePage={"dashboard"} />
      <div className="px-36 w-full h-full flex flex-col pt-5">
        <div className="w-full flex rounded-xl bg-MatTeal h-32 items-center p-5">
          <img
            src={profilePic}
            alt=""
            className="h-20 w-20 rounded-full mr-5"
          />
          <div className="flex flex-col">
            <h6 className="text-sm text-slate-300">Dashboard</h6>
            <h1 className=" text-3xl font-bold text-white">
              Welcome back, Liam!
            </h1>
          </div>
        </div>
        <div className="w-full h-full flex">
          <div className="h-full flex justify-between flex-wrap w-2/3 group-odd:">
            <DashboardMenuItem
              title="contribute"
              description={"View & Make Contributions"}
            />
            <DashboardMenuItem title="analyse" description={"Data Commons"} />
            <DashboardMenuItem title="connect" description={"User Directory"} />
            <DashboardMenuItem title="edit" description={"Your Profile"} />
          </div>
          <div className="w-1/3">
            <HelpBox />
          </div>
        </div>
      </div>
    </div>
  );
}
