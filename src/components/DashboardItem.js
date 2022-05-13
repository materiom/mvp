import React from "react";
import ArrowButton from "./ArrowButton";

function DashboardItem(props) {
    return (
        <div className="flex flex-col min-w-[50%] min-h-[50%] text-center justify-around items-center">
            <h1 className="text-xl">{props.title}</h1>
            <ArrowButton color="blue" displayText="Go" function={() => alert("working on it :)")}/>
        </div>
    );
}

export default DashboardItem;