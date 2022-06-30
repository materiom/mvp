import React from "react";
import { Link } from "react-router-dom";

function ProcessList(props) {
  const processListArray = props.processes.map((process) => {
    return <Link key={process.name} to={`/process/${process.id}`}>{`${process.name}, `}</Link>;
  });

  return (
  <div className="text-MatDarkGrey text-xs">
    {processListArray}
    </div>
  )
}

export default ProcessList;
