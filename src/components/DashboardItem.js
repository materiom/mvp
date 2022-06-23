import React from "react";
import { Link } from "react-router-dom";

function DashboardMenuItem(props) {
  return (
    <Link to={props.title} className="dashboard-menu-item no-underline">
      <div className="dashboard-menu-inner-item group">
        <img
          src={require(`./../pictures/dashboard/${props.title}.svg`)}
          alt={props.title}
        />
        <div className="flex flex-col items-center">
          <h5 className="uppercase text-xs text-gray-400">{props.title.toUpperCase()}</h5>
          <h2 className="capitalize text-black text-lg font-extrabold">{props.description}</h2>
        </div>
        <Link
          className="bg-gray-200 no-underline group-hover:bg-MatTeal duration-300 text-black py-1 px-8 rounded-full"
          to={props.title}
        >
          Go
        </Link>
      </div>
    </Link>
  );
}

export default DashboardMenuItem;
