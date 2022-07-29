import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function DataSearchBar() {
    return (
        <div className="mb-5  flex  items-center  rounded-full  bg-white  p-3">
            <BiSearchAlt color="#609690" size="2em" />
            <input
                className="ml-3  flex  flex-1  border-0  focus:border-0  focus:outline-none"
                type="text"
                placeholder="Search  for  anything..."
            />
            <div className="  w-36">
                <button className="blue-button">Search</button>
            </div>
        </div>
    )
}
