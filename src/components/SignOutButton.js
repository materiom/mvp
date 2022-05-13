import React from "react";
import { FiArrowRight, FiLogOut } from "react-icons/fi";
import { IoIosLogOut, IoMdExit, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function SignOutButton(props) {
  return (
    <Link to="/login">
      <button
        onClick={() => props.function()}
        className={`${props.color}-button`}
        disabled={props.isDisabled && true}
      >
        <FiLogOut className=" text-lg" />
        {props.displayText}
      </button>
    </Link>
  );
}

export default SignOutButton;
