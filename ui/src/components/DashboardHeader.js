import React from "react";
import { Link } from "react-router-dom";

import logo from "./../pictures/full-logo.svg";
import profile from "./../pictures/profile.jpg";

function Header(props) {
  return (
    <div className="w-screen min-h-[128px] h-32 flex px-36 justify-between items-center  bg-MatGrey mb-10">
      <img
        src={logo}
        alt=""
        href="materiom.org"
        className="mr-auto my-auto h-12 "
      />
      <div className="flex items-center justify-between h-full w-4/6 mx-36">
        <div
          className={
            `h-full w-1/4 flex ` +
            (props.activePage === "dashboard" && " bg-MatDarkGrey")
          }
        >
          <Link className="text-md m-auto text-white no-underline" to="/">
            My dashboard
          </Link>
        </div>
        <div
          className={
            `h-full w-1/4 flex ` +
            (props.activePage === "commons" && "bg-MatDarkGrey")
          }
        >
          <Link className="text-md m-auto text-white no-underline" to="/login">
            Data commons
          </Link>
        </div>
        <div
          className={
            `h-full w-1/4 flex ` +
            (props.activePage === "contribute" && "bg-MatDarkGrey")
          }
        >
          <Link
            className="text-md m-auto text-white no-underline"
            to="/contribute"
          >
            Contribute
          </Link>
        </div>
        <div
          className={
            `h-full w-1/4 flex ` +
            (props.activePage === "connect" && "bg-MatDarkGrey")
          }
        >
          <Link className="text-md m-auto text-white no-underline" to="/connect">
            User directory
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center w-36">
        <Link className="text-sm text-white no-underline" to="/login">
          Sign out
        </Link>
        <Link className="text-sm text-white no-underline" to="/edit-profile">
          <img
            src={profile}
            alt=""
            href="materiom.org"
            className="my-auto h-12 w-12 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
