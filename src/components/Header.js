// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Pictures
import logo from "./../pictures/full-logo.svg";
import profile from "./../pictures/profile.jpg";

export default function Header(props) {
  return (
    <div className="w-screen min-h-[128px] min-w-[100vw] h-[15vh] flex px-36 justify-between items-center  bg-MatGrey">
      <Link to="/">
        <img
          src={logo}
          alt="materiom logo"
          href="materiom.org"
          className="mr-auto my-auto h-12 "
        />
      </Link>
      <div className="flex items-center justify-between h-full w-4/6 mx-36">
        {/* the props.activePage variable denotes which tab is highlighted */}
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
            (props.activePage === "analyse" && "bg-MatDarkGrey")
          }
        >
          <Link
            className="text-md m-auto text-white no-underline"
            to="/analyse"
          >
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
          <Link
            className="text-md m-auto text-white no-underline"
            to="/connect"
          >
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
            className="profile-header-cy-TEST my-auto h-12 w-12 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
