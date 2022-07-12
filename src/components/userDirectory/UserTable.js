import React from "react";
import UserTableRow from "./UserTableRow";

export default function UserTable(props) {
  const tableRows = props.users.map((user, index) => {
    if (index < 20) {
    return (
        <UserTableRow key={user.id} user={user} />
    );
    }
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
