// Dependencies
import React from "react";

export default function DifficultyIcon(props) {
  // set default length array as difficulty will
  // always be between 1 and 5
  const difficultyArray = Array(5);
  // function to render as many green dots as the
  // difficulty level
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
  return (
    <div className="w-full flex overflow-hidden">{difficultyIconArray}</div>
  );
}
