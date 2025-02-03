import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { LuReceiptIndianRupee } from "react-icons/lu";
import { MdBookOnline, MdOutlineSpeed } from "react-icons/md";

function DriverDetails() {
  return (
    <div className="flex flex-col items-start gap-4 w-full ">
      <div className="w-full flex justify-between items-center gap-4">
        <div className="w-1/2">
          <img
            className="w-14 h-14 rounded-full object-cover object-center absolute"
            src=" https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="car_png"
          />

          <img
            className="h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeAq9E52gBgABElnIPJ4BXYzFdY5HQjvY0W5h_2sw8nvWeb5ZNf7Ga_BTqoGNZU6jy2k&usqp=CAU"
            alt="car_png"
          />
        </div>

        <div className="flex flex-col items-end gap-2 text-end w-1/2">
          <div>
            <h2 className="text-xl font-normal uppercase">James</h2>
            <div
              className="flex  gap-2   w-full border-gray-200  items-end justify-end
        "
            >
              <LuReceiptIndianRupee className="text-2xl" />

              <span className=" font-semibold text-xl">
                ₹768.92 <br /> <p>Earned Today</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* input line and button */}
      <div className="flex flex-col gap-2 w-full mt-4 ">
        <div className="flex justify-evenly items-center py-2 ">
          <div className="flex items-center flex-col gap-1 ">
            <span className="text-3xl">
              <MdOutlineSpeed />
            </span>
            <span>10.2</span>
            <span>Houre Only</span>
          </div>
          <div className="flex items-center flex-col gap-1">
            <span className="text-3xl">
              {" "}
              <IoTimeOutline />
            </span>
            <span>10.2</span>
            <span>Houre Only</span>
          </div>
          <div className="flex items-center flex-col gap-1">
            <span className="text-3xl">
              <MdBookOnline />
            </span>
            <span>10.2</span>
            <span>Houre Only</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;
