// Import dependencies
import React from "react";
import support from "./../pictures/dashboard/support.svg";
import twitter from "./../pictures/dashboard/twitter.svg";

export default function HelpBox() {
  return (
    <div className="w-full h-full min-h-full pl-10 pt-5 pb-5">
      <div className="w-full h-full min-h-full p-10 flex flex-col justify-between rounded-lg bg-cover bg-[url('./pictures/dashboard/help-box.jpg')]">
        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold">Need Help?</h2>
          <h5 className="text-lg w-3/4 text-MatDarkGrey my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <div className="flex">
            <div className="flex flex-1 justify-start items-center mr-3">
              <div className=" bg-white rounded-full p-3  hover:shadow-xl duration-300">
                <img className="min-w-[20px] h-6" src={support} alt="Contact support" />
              </div>
              <div className="flex flex-col">
                <h4 className="pl-4">Contact</h4>
                <h4 className="pl-4">Support</h4>
              </div>
            </div>
            <div className="flex flex-1 justify-start items-center">
              <div className=" bg-white rounded-full p-3 hover:shadow-xl duration-300">
                <img className="min-w-[20px] h-6" src={twitter} alt="Tweet us" />
              </div>
              <div className="flex flex-col">
                <h4 className="pl-4">Tweet</h4>
                <h4 className="pl-4">Us</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg text-MatDarkGrey my-5">
            Phasellus in nibh semper diam consequat sollicitudin ac id enim.
            Phasellus quis dui eget sapien vulputate feugiat.
          </h5>

          <a
            className="no-underline bg-MatOrange text-white rounded-lg text-center p-5"
            href="#"
          >
            Read guide
          </a>
        </div>
      </div>
    </div>
  );
}
