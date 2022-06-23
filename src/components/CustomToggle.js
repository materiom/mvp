import React, { useState } from "react";

function CustomToggle(props) {
  const [toggle, handleToggle] = useState(false);
  return (
    <div
      onClick={() => handleToggle(!toggle)}
      className={`m-1 w-8 h-4 min-h-[1rem] min-w-[2rem] p-[2px] border-[1px] border-MatGrey rounded-full flex items-center ${
        toggle ? "border-MatTeal" : "border-MatGrey"
      }`}
    >
      <div
        className={`w-3 h-3 ${
          toggle ? "bg-MatTeal translate-x-full" : "bg-MatGrey"
        } rounded-full  transition duration-300`}
      ></div>
    </div>
  );
}

export default CustomToggle;
