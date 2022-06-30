import React from "react";
import {ConvertHtmlToString} from "./../../hooks/ConvertHtmlToString"
function MethodList(props) {
  const methodListArray = props.method.map((method, index) => {
    return (
        <div key={method.id} className="w-full pb-5 flex justify-start">
          <div>
            <div className="h-6 w-6 flex justify-center items-center rounded-full bg-MatLightGrey text-MatDarkGrey">
              <h3>{index + 1}</h3>
            </div>
          </div>
          <div className="h-full ml-3 flex flex-col justify-center">
            <h6 className=" text-xs">{ConvertHtmlToString(method.description)}</h6>
          </div>
        </div>
    );
  });

  return <div className="w-full flex flex-wrap">{methodListArray}</div>;
}
export default MethodList;
