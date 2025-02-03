import React from "react";
import { FaAmazonPay, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function LookingForDriver(props) {
  return (
    <div>
      {" "}
      <div>
        <h5
          onClick={() => {
            props.setVehicalFound(false);
          }}
          className="p-1 text-2xl font-semibold flex items-center justify-center absolute top-0 w-full text-gray-400"
        >
          <IoIosArrowDown />
        </h5>
        <h3 className="text-2xl p-3 top-0 font-semibold">
          Looking for a Driver wait please wait ...
        </h3>

        <div className="flex flex-col items-start gap-4 w-full ">
          <div className="w-full flex justify-center">
            <img
              className="h-24 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeAq9E52gBgABElnIPJ4BXYzFdY5HQjvY0W5h_2sw8nvWeb5ZNf7Ga_BTqoGNZU6jy2k&usqp=CAU"
              alt="car_png"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2  p-3 border-b-2 w-full border-gray-200  ">
              <FaUser className="text-xl" />
              <span className=" font-semibold">
                34B IT MALL <br />
                <span className="text-sm">Stefeen cafe</span>
              </span>
            </div>
            <div className="flex  gap-2   p-3 border-b-2 w-full border-gray-200 ">
              <FaLocationDot className="text-xl" />
              <span className=" font-semibold">
                21/34H Vrinda Colony <br />
                <span className="text-sm">raidurg md road</span>
              </span>
            </div>
            <div className="flex  gap-2   p-3 border-b-2 w-full border-gray-200  ">
              <FaAmazonPay className="text-2xl" />
              <span className=" font-semibold text-xl">
                ₹200 <br /> <p className="text-sm">Online.Cash</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForDriver;
