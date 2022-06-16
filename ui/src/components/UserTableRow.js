import React from "react";
import CustomToggle from "./CustomToggle";
import profile from "./../pictures/profile.jpg";
import location from "./../pictures/directory/location.svg";

export default function UserTableRow() {
  return (
    <div>
      <hr className="w-full h-1 my-5 mx-auto" />

      <div className="flex w-full justify-between">
        <div className="flex">
          <img src={profile} alt="profile" className=" h-10 rounded-full" />
          <div className="flex flex-col ml-3">
            <h5>Liam Reeves</h5>
            <h6 className="text-sm text-MatGrey">Materiom</h6>
          </div>
        </div>
        <div className="flex w-2/3 justify-end items-center">
          <div className="flex items-center justify-between">
            <img src={location} alt="location" className="h-4 pr-5" />
            <h6 className="font-bold text-MatBlue ">Bristol, United Kingdom</h6>
          </div>
          <div className="w-1/4">
            <button className="white-button">Follow</button>
          </div>
        </div>
      </div>
      <hr className="w-full h-1 my-5 mx-auto" />
    </div>
  );
}
