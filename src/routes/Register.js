// Dependencies
import React from 'react'
import RegistrationForm from '../components/RegistrationForm'

// Pictures
import picture from './../pictures/login/background.webp'
import pattern from './../pictures/login/pattern.svg'
import logo from './../pictures/full-logo.svg'

// Hooks
import useUpdateTitle from '../hooks/UpdatePageTitle'
import { Link } from 'react-router-dom'

export default function Register(props) {
    // update page title
    useUpdateTitle(props.title)

    return (
        <div className="flex h-screen">
            <Link to="/" target="_blank" rel="noreferrer">
                <img
                    src={logo}
                    alt=""
                    href="https://www.materiom.org"
                    className=" absolute top-10 left-36"
                />
            </Link>
            <div className="col flex h-full w-6/12">
                <img src={picture} alt="" className=" object-cover" />
            </div>

            <div className="col flex h-full w-6/12 items-center justify-center">
                <RegistrationForm />
            </div>
            <img
                src={pattern}
                alt=""
                className="absolute bottom-[-50%] right-[-10%] -z-10"
            />
        </div>
    )
}
