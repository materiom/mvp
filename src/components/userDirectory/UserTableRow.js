// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Pictures
import logo from "../../pictures/logo.png";
import location from "../../pictures/directory/location.svg";

export default function UserTableRow(props) {
  return (
    <div>
      <hr className="w-full h-1 my-5 mx-auto" />

      <div className="flex w-full justify-between">
        <div className="flex w-1/3">
          <img
            src={
              props.user.profilePicture === "NULL"
                ? logo
                : `https://materiom.org/storage/${props.user.profilePicture}`
            }
            alt="profile"
            className=" h-10 w-10 rounded-full"
          />
          <div className="flex flex-col ml-3 w-full">
            <Link to={`/user/profile/${props.user.id}`}>
              <h5 className="full whitespace-nowrap overflow-hidden text-ellipsis">
                {props.user.name}
              </h5>
            </Link>
            <h6 className="text-sm text-MatGrey">Materiom</h6>
          </div>
        </div>
        <div className="flex w-2/3 justify-end items-center">
          <div
            className="flex items-start justify-between w-1/3"
            data-tooltip-target="tooltip-location"
          >
            <img src={location} alt="location" className="h-4 pr-5" />
            <h6 className="w-full whitespace-nowrap font-bold text-MatBlue h-4 overflow-hidden text-ellipsis">
              {props.user.location === "NULL"
                ? "Earth, Milky Way"
                : props.user.location}
            </h6>
            <div
              id="tooltip-location"
              role="tooltip"
              className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            >
              {props.user.location === "NULL"
                ? "Earth, Milky Way"
                : props.user.location}
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <div className="w-1/4">
            <button className="white-button">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
