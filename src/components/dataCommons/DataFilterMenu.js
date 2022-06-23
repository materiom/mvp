import React, { Component } from "react";
import CustomToggle from "../CustomToggle";
import filterIcon from "./../../pictures/directory/filter.svg";
import clearIcon from "./../../pictures/directory/clear.svg";

class DataFilterMenu extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col  p-5 bg-white rounded-lg max-h-[75vh] ">
        <div className="flex items-center justify-between mb-5">
          <div className="flex w-1/4 justify-start items-center">
            <img src={filterIcon} alt="filter" className=" max-h-5" />
            <h3 className="ml-2 text-xl font-bold text-MatBlue">Filters</h3>
          </div>
          <img
            src={clearIcon}
            alt="Clear filters"
            className="custom-hover-filter pr-4"
          />
        </div>
        <div className="flex flex-col max-h-full overflow-y-scroll custom-scrollbar">
          <div className="flex flex-col pr-3 my-3">
            <div className="data-filter-menu-item">
              <h6>Recipes</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Collections</h6>
              <CustomToggle></CustomToggle>
            </div>
            <hr className="w-full h-1 my-5 mx-auto" />
          </div>
          <h5 className="font-bold mb-1">Ingredients</h5>
          <div className="flex flex-col pr-3">
            <div className="data-filter-menu-item">
              <h6>Carbohydrates & sugars</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Proteins</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Minerals {"&"} clays</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Oils, waxes, fats {"&"} lipids</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Resins</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Phenolics</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Composites</h6>
              <CustomToggle></CustomToggle>
            </div>

            <hr className="w-full h-1 my-5 mx-auto" />

            <h5 className="font-bold mb-1">Process</h5>

            <div className="data-filter-menu-item">
              <h6>3D Printed</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Molded</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Cast</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Air dried</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Freeze dried</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Grown</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Fermented</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Boiled</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Fired</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Kneaded</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Dehydrated</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Laser cut</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Dyed</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Texturized</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Extruded</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Stained</h6>
              <CustomToggle></CustomToggle>
            </div>

            <hr className="w-full h-1 my-5 mx-auto" />

            <h5 className="font-bold mb-1">Properties</h5>
            <div className="data-filter-menu-item">
              <h6>Acoustical</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Chemical composition</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Dimensional</h6>
              <CustomToggle></CustomToggle>
            </div>
            <div className="data-filter-menu-item">
              <h6>Electrical</h6>
              <CustomToggle></CustomToggle>
            </div>

            <div className="data-filter-menu-item">
              <h6>Mechanical</h6>
              <CustomToggle></CustomToggle>
            </div>

            <div className="data-filter-menu-item">
              <h6>Optical</h6>
              <CustomToggle></CustomToggle>
            </div>

            <div className="data-filter-menu-item">
              <h6>Rheological</h6>
              <CustomToggle></CustomToggle>
            </div>

            <div className="data-filter-menu-item">
              <h6>Thermal</h6>
              <CustomToggle></CustomToggle>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataFilterMenu;
