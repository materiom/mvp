// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// Pictures
import logo from './../pictures/full-logo.svg'
import profile from './../pictures/profile.png'

export default function Header(props) {
    return (
        <div
            data-cy="header"
            className="flex h-[15vh] min-h-[128px] w-screen min-w-[100vw] items-center justify-between bg-MatGrey  px-36"
        >
            <Link to="/">
                <img
                    src={logo}
                    alt="materiom logo"
                    href="materiom.org"
                    className="my-auto mr-auto h-12 "
                />
            </Link>
            <div className="mx-36 flex h-full w-4/6 items-center justify-between">
                {/* the props.activePage variable denotes which tab is highlighted */}
                <div
                    className={
                        `flex h-full w-1/4 ` +
                        (props.activePage === 'dashboard' && ' bg-MatDarkGrey')
                    }
                >
                    <Link
                        className="text-md m-auto text-white no-underline"
                        to="/"
                    >
                        My dashboard
                    </Link>
                </div>
                <div
                    className={
                        `flex h-full w-1/4 ` +
                        (props.activePage === 'analyse' && 'bg-MatDarkGrey')
                    }
                >
                    <Link
                        className="text-md m-auto text-white no-underline"
                        to="/analyse"
                    >
                        Data commons
                    </Link>
                </div>
                <div
                    className={
                        `flex h-full w-1/4 ` +
                        (props.activePage === 'contribute' && 'bg-MatDarkGrey')
                    }
                >
                    <Link
                        className="text-md m-auto text-white no-underline"
                        to="/contribute"
                    >
                        Contribute
                    </Link>
                </div>
                <div
                    className={
                        `flex h-full w-1/4 ` +
                        (props.activePage === 'connect' && 'bg-MatDarkGrey')
                    }
                >
                    <Link
                        className="text-md m-auto text-white no-underline"
                        to="/connect"
                    >
                        User directory
                    </Link>
                </div>
            </div>
            <div className="flex w-36 items-center justify-between">
                <Link className="text-sm text-white no-underline" to="/login">
                    Sign out
                </Link>
                <Link
                    className="rounded-full bg-MatLightGrey p-1 text-sm text-white no-underline"
                    to="/profile"
                >
                    <img
                        src={profile}
                        alt=""
                        href="materiom.org"
                        className="profile-header-cy-TEST my-auto h-12 w-12 rounded-full"
                    />
                </Link>
            </div>
        </div>
    )
}
