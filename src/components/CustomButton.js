// Dependencies
import React from "react";
import { Link } from "react-router-dom";

export default function CustomButton(props) {
  return (
    <Link to={props.link ? props.link : "#"} className="no-underline">
      <button
        onClick={() => props.function()}
        className={`${props.color}-button`}
        disabled={props.isDisabled && true}
      >
        {props.displayText}
      </button>
    </Link>
  );
}
