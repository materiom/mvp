// Dependencies
import React from "react";

function ProcessList(props) {
  const processListArray = props.processes.map((process) => {
    return <h6 key={process.name} className="mr-1">{`${process.name},`}</h6>;
  });

  return (
    <div className="text-MatDarkGrey text-xs flex">{processListArray}</div>
  );
}

export default ProcessList;
