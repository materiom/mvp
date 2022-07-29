//  Dependencies
import React, { useEffect, useState } from 'react'
import { FiCircle, FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

//  Components
import CustomButton from './CustomButton'

//  Hooks
import register from '../db/register'

export default function RegistrationForm() {
    //  set  initial  state
    const [email, updateEmail] = useState('')
    const [password, updatePassword] = useState('')
    const [passwordConfirm, updatePasswordConfirm] = useState('')
    const [passwordsMatch, updatePasswordsMatch] = useState(false)
    const [showPassword, handleShowPassword] = useState(false)

    //  function  to  check  if  user  password
    //  and  password  confirmation  match
    useEffect(() => {
        if (password !== passwordConfirm) {
            updatePasswordsMatch(false)
        } else {
            updatePasswordsMatch(true)
        }
    }, [password, passwordConfirm])

    useEffect(() => {
        return () => {
            //  Anything  in  here  is  fired  on  component  unmount.
            //  Cleaning  up  state
            updateEmail('')
            updatePassword('')
            updatePasswordConfirm('')
            updatePasswordsMatch(false)
            handleShowPassword(false)
        }
    }, [])

    return (
        <div
            data-cy="register-form"
            className={`absolute  top-[25%]  left-[45%]  flex  w-[80%]  
          max-w-[500px]  flex-col  items-center  justify-between
          rounded-[10px]  bg-white  p-5  shadow-2xl`}
        >
            <div className="w-full  text-left">
                <h1 className="mt-3  text-3xl  font-extrabold">Get Started</h1>

                <h1 className="  text-sm  text-gray-500">
                    Already have an account?{'  '}
                    <Link
                        data-cy="login-link"
                        className="  text-MatBlue"
                        to="/login"
                    >
                        Login
                    </Link>
                </h1>
            </div>

            <div className="flex  h-full  w-full  flex-col  items-center  justify-center">
                <button className="max-w-400px  my-5  h-10  w-[75%]  rounded-lg  border-[1px]  border-gray-400  p-2  text-sm  font-bold">
                    Sign in with Google
                </button>

                <div className="row  flex  w-full  items-center  justify-between">
                    <hr className="  w-[45%]  bg-slate-400" />
                    <h4 className="  text-slate-400">or</h4>
                    <hr className="  w-[45%]  bg-slate-400" />
                </div>

                <form className="flex  h-full  w-full  flex-col  justify-around">
                    <div className="flex  flex-col  pb-3">
                        <label htmlFor="">Name</label>
                        <input className="custom-input" type="text" />
                    </div>
                    <div className="flex  flex-col  pb-3">
                        <label htmlFor="">Email</label>
                        <input
                            className="custom-input"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                updateEmail(event.target.value)
                            }
                        />
                    </div>
                    <div className="flex  flex-col  pb-3">
                        <label className="flex  items-center" htmlFor="">
                            Password
                            <FiEye
                                className="ml-3"
                                onClick={() =>
                                    handleShowPassword(!showPassword)
                                }
                            />
                        </label>
                        <input
                            className="custom-input"
                            //  variable  in  state  used  to  toggle  show  password
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(event) =>
                                updatePassword(event.target.value)
                            }
                        />
                    </div>
                    <div className="flex  flex-col  pb-3">
                        <label className="flex  items-center" htmlFor="">
                            Confirm Password
                            <FiCircle
                                className="ml-3"
                                fill={
                                    passwordsMatch && password.length > 0
                                        ? '#609690'
                                        : '#b3243c'
                                }
                            />
                        </label>
                        <input
                            className="custom-input"
                            type={showPassword ? 'text' : 'password'}
                            value={passwordConfirm}
                            onChange={(event) =>
                                updatePasswordConfirm(event.target.value)
                            }
                        />
                    </div>
                    <div className="flex  flex-row-reverse  pb-3">
                        <label htmlFor="term" className="  text-xs">
                            {'  '}
                            Creating an account means you are okay with our
                            {'  '}
                            <Link to="/terms">Terms of Service</Link>,{'  '}
                            <Link to="/privacy-policy">
                                {' '}
                                Privacy Policy
                            </Link>{' '}
                            and out default{'  '}
                            <Link to="/notification-settings">
                                Notification Setting
                            </Link>
                        </label>
                        <input type="checkbox" className="custom-checkbox" />
                    </div>

                    <CustomButton
                        displayText="Register"
                        function={() => register(email, password)}
                        color="blue"
                    />
                </form>
            </div>
        </div>
    )
}
