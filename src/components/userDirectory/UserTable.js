import React from 'react'
import UserTableRow from './UserTableRow'

export default function UserTable(props) {
    const tableRows = props.users.map((user, index) => {
        if (index < 20) {
            return <UserTableRow key={user.id} user={user} />
        }
    })
    return (
        <div className="flex max-h-[75vh]  flex-col rounded-lg bg-white p-5 ">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex w-1/4 items-center justify-start">
                    <h3 className="text-xl font-bold text-MatBlue">
                        User directory
                    </h3>
                </div>
            </div>
            <div className="custom-scrollbar flex max-h-full flex-col overflow-y-scroll">
                {tableRows}
            </div>
        </div>
    )
}
