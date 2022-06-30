import React from "react";
import { Link } from "react-router-dom";

function ToolsList(props) {
  const toolsListArray = props.tools.map((tool) => {
    return <Link key={tool.name} to={`/tools/${tool.id}`}>{`${tool.name}, `}</Link>;
  });

  return (
  <div className="text-MatDarkGrey text-xs">
    {toolsListArray}
    </div>
  )
}

export default ToolsList;
