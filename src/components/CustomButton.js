import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function CustomButton(props) {
  return (
    <Link to="/">
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

export default CustomButton;
