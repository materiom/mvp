// Dependencies
import React from "react";

export default function ToolsList(props) {
  // function to return an array of recipe tools
  const toolsListArray = props.tools.map((tool) => {
    return <h6 key={tool.name} className="mr-1">{`${tool.name},`}</h6>;
  });

  return <div className="text-MatDarkGrey text-xs flex">{toolsListArray}</div>;
}
