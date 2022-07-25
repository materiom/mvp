// Dependencies
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { FiCircle, FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

// Components
import ContributePhotoCrop from '../components/contribute/ContributePhotoCrop'

// Hooks
import useUpdateTitle from '../hooks/UpdatePageTitle'

// Pictures
import profile from './../pictures/profile.png'

export default function EditProfile(props) {
    // update page title
    useUpdateTitle(props.title)

    // set initial state
    const [showDetails, updateShowDetails] = useState(true)
    const [password, updatePassword] = useState('')
    const [newPasswordConfirm, updateNewPasswordConfirm] = useState('')
    const [newPassword, updateNewPassword] = useState('')
    const [passwordsMatch, updatePasswordsMatch] = useState(false)
    const [showPassword, handleShowPassword] = useState(false)
    const [showNewPassword, handleShowNewPassword] = useState(false)
    const [newProfilePicture, updateNewProfilePicture] = useState('false')

    // function to check if user password
    // and password confirmation match
    useEffect(() => {
        if (newPassword !== newPasswordConfirm) {
            updatePasswordsMatch(false)
        } else {
            updatePasswordsMatch(true)
        }
    }, [newPassword, newPasswordConfirm])

    return (
        <div className="min-h-[100vh] min-w-[100vw] bg-MatLightGrey">
            {/* Pass through a string to tell the header which tab to highlight */}
            <Header activePage="dashboard" />
            <ContributePhotoCrop
                updateNewProfilePicture={() => updateNewProfilePicture}
            />
            <div className="flex h-[85vh] w-full flex-col overflow-y-scroll bg-MatLightGrey px-36 py-5">
                <Link to="/" className="blue-button mb-5 w-48">
                    {' '}
                    Back to dashboard
                </Link>
                <div className="flex items-center ">
                    <div className="relative">
                        <img
                            className="h-28 w-28 rounded-full"
                            src={profile}
                            alt="profile"
                        />
                        <BsPencil
                            onClick={() => alert('Upload picture!')}
                            className=" relative bottom-3 left-20 h-6 w-6 p-1"
                        />
                    </div>
                    <div className="ml-5">
                        <h2 className=" text-lg text-MatGrey">Dashboard</h2>
                        <h1 className=" font-codecColdExtraBold text-4xl text-MatDarkGrey">
                            Edit your profile
                        </h1>
                    </div>
                </div>
                <hr className="my-5 mx-auto h-[2px] w-full bg-MatLightGrey" />
                <div className="flex">
                    <div className="flex w-1/6 flex-col">
                        <h2
                            onClick={() => updateShowDetails(true)}
                            className={
                                'text-lg ' +
                                (showDetails && 'font-codecColdExtraBold')
                            }
                        >
                            Your details
                        </h2>
                        <h2
                            onClick={() => updateShowDetails(false)}
                            className={
                                'text-lg ' +
                                (!showDetails && 'font-codecColdExtraBold')
                            }
                        >
                            Password
                        </h2>
                    </div>
                    <div className="flex w-5/6">
                        {/* Switch to decide to show details or password */}
                        {showDetails ? (
                            <div className="flex flex-col">
                                {/* Start of DETAILS */}
                                <div className="flex justify-between">
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="name"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            id="name"
                                            className="mb-5 mt-1 rounded bg-white"
                                            onChange={(event) =>
                                                updateNewPassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            id="username"
                                            className="mb-5 mt-1 w-full rounded bg-white"
                                            value={password}
                                            onChange={(event) =>
                                                updatePassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            className="mb-5 mt-1 rounded bg-white"
                                            onChange={(event) =>
                                                updateNewPassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="website"
                                        >
                                            Website
                                        </label>
                                        <input
                                            id="website"
                                            className="mb-5 mt-1 rounded bg-white"
                                            onChange={(event) =>
                                                updateNewPassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="email"
                                        >
                                            Twitter
                                        </label>
                                        <input
                                            id="email"
                                            className="mb-5 mt-1 rounded bg-white"
                                            onChange={(event) =>
                                                updateNewPassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="website"
                                        >
                                            LinkedIn
                                        </label>
                                        <input
                                            id="website"
                                            className="mb-5 mt-1 rounded bg-white"
                                            onChange={(event) =>
                                                updateNewPassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                    <div className="flex w-full flex-col p-1">
                                        <label
                                            className="flex items-center"
                                            htmlFor="website"
                                        >
                                            Instagram
                                        </label>
                                        <input
                                            id="website"
                                            className="mb-5 mt-1 rounded bg-white"
                                            onChange={(event) =>
                                                updateNewPassword(
                                                    event.target.value
                                                )
                                            }
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                        />
                                    </div>
                                </div>

                                <label
                                    className="flex items-center"
                                    htmlFor="location"
                                >
                                    Location
                                </label>
                                <input
                                    id="location"
                                    className="mb-5 mt-1 rounded bg-white"
                                    onChange={(event) =>
                                        updateNewPassword(event.target.value)
                                    }
                                    type={showNewPassword ? 'text' : 'password'}
                                />
                                <label
                                    className="flex items-center"
                                    htmlFor="aboutYou"
                                >
                                    About you
                                </label>
                                <textarea
                                    className="mb-5 mt-1 resize-y rounded bg-white"
                                    id="aboutYou"
                                    onChange={(event) =>
                                        updateNewPasswordConfirm(
                                            event.target.value
                                        )
                                    }
                                />
                                <Link to="/" className="blue-button mb-5 w-48">
                                    {' '}
                                    Update
                                </Link>
                                {/* End of DETAILS */}
                            </div>
                        ) : (
                            <div className="flex w-1/2 flex-col">
                                <label
                                    className="flex items-center"
                                    htmlFor="oldPassword"
                                >
                                    Old password
                                    <FiEye
                                        className="ml-3"
                                        onClick={() =>
                                            handleShowPassword(!showPassword)
                                        }
                                    />
                                </label>
                                <input
                                    className="mb-5 mt-1 w-full rounded bg-white"
                                    value={password}
                                    onChange={(event) =>
                                        updatePassword(event.target.value)
                                    }
                                    type={showPassword ? 'text' : 'password'}
                                />
                                <label
                                    className="flex items-center"
                                    htmlFor="newPassword"
                                >
                                    New password
                                    <FiEye
                                        className="ml-3"
                                        onClick={() =>
                                            handleShowNewPassword(
                                                !showNewPassword
                                            )
                                        }
                                    />
                                </label>
                                <input
                                    className="mb-5 mt-1 rounded bg-white"
                                    onChange={(event) =>
                                        updateNewPassword(event.target.value)
                                    }
                                    type={showNewPassword ? 'text' : 'password'}
                                />
                                <label
                                    className="flex items-center"
                                    htmlFor="confirmNewPassword"
                                >
                                    Confirm new password
                                    <FiCircle
                                        className="ml-3"
                                        fill={
                                            passwordsMatch &&
                                            newPassword.length > 0
                                                ? '#609690'
                                                : '#b3243c'
                                        }
                                    />
                                </label>
                                <input
                                    className="mb-5 mt-1 rounded bg-white"
                                    id="confirmNewPassword"
                                    onChange={(event) =>
                                        updateNewPasswordConfirm(
                                            event.target.value
                                        )
                                    }
                                    type={showNewPassword ? 'text' : 'password'}
                                />
                                <Link to="/" className="blue-button mb-5 w-48">
                                    {' '}
                                    Update
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
