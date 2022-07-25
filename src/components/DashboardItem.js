// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardMenuItem(props) {
    return (
        <Link to={props.title} className="dashboard-menu-item no-underline">
            <div className="dashboard-menu-inner-item group">
                <img
                    src={require(`./../pictures/dashboard/${props.title}.svg`)}
                    alt={props.title}
                />
                <div className="flex flex-col items-center">
                    <h5 className="text-xs uppercase text-gray-400">
                        {props.title.toUpperCase()}
                    </h5>
                    <h2 className="text-lg font-extrabold capitalize text-black">
                        {props.description}
                    </h2>
                </div>
                <Link
                    className="rounded-full bg-gray-200 py-1 px-8 text-black no-underline duration-300 group-hover:bg-MatTeal"
                    to={props.title}
                >
                    Go
                </Link>
            </div>
        </Link>
    )
}
