import React from 'react'
import logo from '../../pictures/logo.png'
import location from '../../pictures/directory/location.svg'
import { Link } from 'react-router-dom'

export default function UserTableRow(props) {
    return (
        <div>
            <hr className="my-5 mx-auto h-1 w-full" />

            <div className="flex w-full justify-between">
                <div className="flex w-1/3">
                    <img
                        src={
                            props.user.profilePicture === 'NULL'
                                ? logo
                                : `https://materiom.org/storage/${props.user.profilePicture}`
                        }
                        alt="profile"
                        className=" h-10 w-10 rounded-full"
                    />
                    <div className="ml-3 flex w-full flex-col">
                        <Link to={`/user-profile/${props.user.id}`}>
                            <h5 className="full overflow-hidden text-ellipsis whitespace-nowrap">
                                {props.user.name}
                            </h5>
                        </Link>
                        <h6 className="text-sm text-MatGrey">Materiom</h6>
                    </div>
                </div>
                <div className="flex w-2/3 items-center justify-end">
                    <div
                        className="flex w-1/3 items-start justify-between"
                        data-tooltip-target="tooltip-location"
                    >
                        <img
                            src={location}
                            alt="location"
                            className="h-4 pr-5"
                        />
                        <h6 className="h-4 w-full overflow-hidden text-ellipsis whitespace-nowrap font-bold text-MatBlue">
                            {props.user.location === 'NULL'
                                ? 'Earth, Milky Way'
                                : props.user.location}
                        </h6>
                        <div
                            id="tooltip-location"
                            role="tooltip"
                            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                        >
                            {props.user.location === 'NULL'
                                ? 'Earth, Milky Way'
                                : props.user.location}
                            <div
                                className="tooltip-arrow"
                                data-popper-arrow
                            ></div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <button className="white-button">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
