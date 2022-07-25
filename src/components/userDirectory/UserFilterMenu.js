import React, { Component } from 'react'
import CustomToggle from './../CustomToggle'
import filterIcon from '../../pictures/directory/filter.svg'
import clearIcon from '../../pictures/directory/clear.svg'

class UserFilterMenu extends Component {
    state = {}
    render() {
        return (
            <div className="flex  max-h-[75vh]    flex-col  rounded-lg  bg-white  p-5  ">
                <div className="mb-5  flex  items-center  justify-between">
                    <div className="flex  w-1/4  items-center  justify-start">
                        <img
                            src={filterIcon}
                            alt="filter"
                            className="  max-h-5"
                        />
                        <h3 className="ml-2  text-xl  font-bold  text-MatBlue">
                            Filters
                        </h3>
                    </div>
                    <img
                        src={clearIcon}
                        alt="Clear  filters"
                        className="custom-hover-filter  pr-4"
                    />
                </div>
                <div className="custom-scrollbar  flex  max-h-full  flex-col  overflow-y-scroll">
                    <h5 className="mb-1  font-bold">Location</h5>
                    <div className="flex  flex-col  pr-3">
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>United Kingdom</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>United States</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Canada</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Spain</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>France</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Germany</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Australia</h6>
                            <CustomToggle></CustomToggle>
                        </div>

                        <hr className="my-5  mx-auto  h-1  w-5/6" />

                        <h5 className="mb-1  font-bold">Discipline</h5>

                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Engineering</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Design</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Material science</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Ecology</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Sustainability</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Chemistry</h6>
                            <CustomToggle></CustomToggle>
                        </div>

                        <hr className="my-5  mx-auto  h-1  w-5/6" />

                        <h5 className="mb-1  font-bold">Industry</h5>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Textiles / Fashion</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Architecture</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Packaging</h6>
                            <CustomToggle></CustomToggle>
                        </div>
                        <div className="flex  justify-between  text-MatGrey">
                            <h6>Consumer goods</h6>
                            <CustomToggle></CustomToggle>
                        </div>

                        <hr className="my-5  mx-auto  h-1  w-5/6" />

                        <h5 className="mb-1  font-bold">Keywords</h5>

                        <div className="flex  flex-col">
                            <h6 className="text-MatGrey">First name</h6>
                            <input className="custom-input  mt-1  mb-5" />
                        </div>
                        <div className="flex  flex-col">
                            <h6 className="text-MatGrey">Last name</h6>
                            <input className="custom-input  mt-1  mb-5" />
                        </div>
                        <div className="flex  flex-col">
                            <h6 className="text-MatGrey">
                                Institution / Company
                            </h6>
                            <input className="custom-input  mt-1  mb-5" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserFilterMenu
