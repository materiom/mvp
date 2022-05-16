import React from "react";
import ArrowButton from "./ArrowButton";

function DashboardItem(props) {
    return (
        <div className="flex flex-col w-full min-h-[50%] text-center justify-around items-center">
            <h1 className="text-xl">{props.title}</h1>
            <ArrowButton color="blue" displayText="Go" function={() => alert("working on it :)")}/>
        </div>
    );
}

export default DashboardItem;