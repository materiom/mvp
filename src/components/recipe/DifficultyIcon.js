import React from "react";

function DifficultyIcon(props) {
  const difficultyIconArray = [...Array(5)].map((item, index) => {
    return (
      <div
        className={
          "mr-1 h-4 w-4 rounded-full " +
          (index < props.difficulty ? "bg-MatTeal" : "bg-MatGrey")
        }
      ></div>
    );
  });
  console.log(difficultyIconArray);
  return (
    <div className="flex w-full overflow-hidden">{difficultyIconArray}</div>
  );
}
export default DifficultyIcon;
