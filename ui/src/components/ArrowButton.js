import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function ArrowButton(props) {
  return (
    <Link to="/">
      <button
        onClick={() => props.function()}
        className={`${props.color}-button`}
        disabled={props.isDisabled && true}
      >
        {props.displayText}
        <FiArrowRight />
      </button>
    </Link>
  );
}

export default ArrowButton;
