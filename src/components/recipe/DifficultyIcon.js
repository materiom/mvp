import React from "react";
import { Link } from "react-router-dom";

function DifficultyIcon(props) {
  const difficultyArray = Array(5);
  const difficultyIconArray = [...Array(5)].map((item, index) => {
    return (
      <div
        className={
          "h-4 w-4 rounded-full mr-1 " +
          (index < props.difficulty ? "bg-MatTeal" : "bg-MatGrey")
        }
      ></div>
    );
  });
console.log(difficultyIconArray)
  return (
    <div className="w-full flex overflow-hidden">{difficultyIconArray}</div>
  );
}
export default DifficultyIcon;
