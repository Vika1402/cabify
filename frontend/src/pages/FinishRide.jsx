import React from "react";
import { FaAmazonPay, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function FinishRide(props) {
  return (
    <div>
      <div>
        <div>
          <h5
            onClick={() => {
              props.setFinishRidePannel(false);
            }}
            className="p-1 text-2xl font-semibold flex items-center justify-center absolute top-0 w-full text-gray-400"
          >
            <IoIosArrowDown />
          </h5>
          <h3 className="text-2xl p-3 top-0 font-semibold">Finish this ride</h3>
          <div className="flex items-center justify-between  bg-amber-300 px-2 py-2 rounded-xl">
            <div className="flex items-center gap-4">
              <img
                className="w-15 h-15 object-cover object-center rounded-full"
                src="https://plus.unsplash.com/premium_photo-1682089897177-4dbc85aa672f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <h2 className="text-xl font-medium">Kamini Malhotra</h2>
            </div>
            <h5>3.5 KM</h5>
          </div>

          <div className="flex flex-col items-start gap-4 w-full ">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-2  p-3 border-b-2 w-full border-gray-200  items-center ">
                <FaUser className="text-xl" />
                <span className=" font-semibold">
                  34B IT MALL <br />
                  <span className="text-sm">Stefeen cafe</span>
                </span>
              </div>
              <div className="flex  gap-2   p-3 border-b-2 w-full border-gray-200  items-center ">
                <FaLocationDot className="text-xl" />
                <span className=" font-semibold">
                  21/34H Vrinda Colony <br />
                  <span className="text-sm">raidurg md road</span>
                </span>
              </div>
              <div className="flex  gap-2   p-3 border-b-2 w-full border-gray-200 items-center">
                <FaAmazonPay className="text-2xl" />
                <span className=" font-semibold text-xl">
                  ₹200 <br /> <p className="text-sm">Cash</p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-col items-center w-full mt-10">
            <Link
              to={"/driver-home"}
              className="p-3 rounded-xl bg-green-500 w-full text-white  font-semibold mt-4 text-lg flex justify-center items-center"
            >
              Complete this Ride
            </Link>
            <p className="text-sm text-red-400 text-wrap">
              click on finish ride if you have completed the payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishRide;
