import React from "react";
import CustomToggle from "./CustomToggle";
import filterIcon from "./../pictures/directory/filter.svg";
import location from "./../pictures/directory/location.svg";
import UserTableRow from "./UserTableRow";
import LazyLoad from "react-lazy-load"

export default function UserTable(props) {
  const tableRows = props.users.map((user, index) => {
    if (index < 20) {
    return (
      <LazyLoad height={720} offsetVertical={0}>
        <UserTableRow key={user.id} user={user} />
      </LazyLoad>
    );
    } else return
  });
  return (
    <div className="flex flex-col  p-5 bg-white rounded-lg max-h-[75vh] ">
      <div className="flex items-center justify-between mb-5">
        <div className="flex w-1/4 justify-start items-center">
          <h3 className="text-xl font-bold text-MatBlue">User directory</h3>
        </div>
      </div>
      <div className="flex flex-col max-h-full overflow-y-scroll custom-scrollbar">
        {tableRows}
      </div>
    </div>
  );
}
