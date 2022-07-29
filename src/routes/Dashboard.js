// Dependencies
import React from 'react'

// Hooks
import useUpdateTitle from '../hooks/UpdatePageTitle'

// Components
import HelpBox from '../components/HelpBox'
import DashboardMenuItem from '../components/DashboardItem'
import Header from '../components/Header'

// Pictures
import profilePic from './../pictures/profile.png'
import { Link } from 'react-router-dom'

export default function Dashboard(props) {
    // update page title
    useUpdateTitle(props.title)

    return (
        <div className=" flex min-h-screen w-full flex-col bg-neutral-100">
            <Header activePage={'dashboard'} />
            <div className="flex h-full w-full flex-col px-36 pt-5">
                <div className="flex h-32 w-full items-center rounded-xl bg-MatTeal p-5">
                    <Link
                        to="/profile"
                        className="mr-5 aspect-square h-20 rounded-full bg-MatLightGrey p-1"
                    >
                        <img
                            src={profilePic}
                            alt="profile"
                            cy-data="profile-picture"
                            className="profile-cy-TEST mr-5 h-20 w-20 rounded-full"
                        />
                    </Link>
                    <div className="flex flex-col">
                        <h6 className="text-sm text-slate-300">Dashboard</h6>
                        <h1 className=" text-3xl font-bold text-white">
                            Welcome back, Liam!
                        </h1>
                    </div>
                </div>
                <div className="flex h-full w-full">
                    <div className="group-odd: flex h-full w-2/3 flex-wrap justify-between">
                        <DashboardMenuItem
                            title="contribute"
                            description={'View & Make Contributions'}
                        />
                        <DashboardMenuItem
                            title="analyse"
                            description={'Data Commons'}
                        />
                        <DashboardMenuItem
                            title="connect"
                            description={'User Directory'}
                        />
                        <DashboardMenuItem
                            title="profile"
                            description={'Your Profile'}
                        />
                    </div>
                    <div className="w-1/3">
                        <HelpBox />
                    </div>
                </div>
            </div>
        </div>
    )
}
