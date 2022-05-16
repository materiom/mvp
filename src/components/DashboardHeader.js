import React from "react";
import { Link } from "react-router-dom";

const logo = require("./../images/full-logo.png");

function DashboardHeader() {
  return (
    <div className="w-full flex justify-between absolute top-0 left-0 m-3">
      <img src={logo} alt="Materiom logo" className=" max-h-10" />
      <div className="flex items-center p-3">
        <Link className="text-sm no-underline mr-5" to="/login">
          Data Commons
        </Link>
        <Link className="text-sm no-underline mr-5" to="/login">
          About
        </Link>
        <Link className="text-sm no-underline mr-5" to="/login">
          Projects
        </Link>
        <span className=" inline-block">
          <Link className="text-sm no-underline mr-5" to="/login">
            Contact Us
          </Link>
        </span>
        <Link className="no-underline" to="/login">
          <button className="mr-5 white-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="mr-5 blue-button">Join</button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
