import React from "react";
import { FaAmazonPay, FaLocationDot, FaStar } from "react-icons/fa6";
import { IoMdHome, IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="w-12 h-12 fixed right-3 top-3 bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <IoMdHome className="text-xl text-blue-950" />
      </Link>

      <div className="h-1/2 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex flex-col items-start gap-4 w-full ">
          <div className="w-full flex justify-between items-center gap-4">
            <div className="w-1/2">
              <img
                className="w-16 h-16 rounded-full object-cover object-center absolute"
                src=" https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="car_png"
              />

              <img
                className="h-16"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeAq9E52gBgABElnIPJ4BXYzFdY5HQjvY0W5h_2sw8nvWeb5ZNf7Ga_BTqoGNZU6jy2k&usqp=CAU"
                alt="car_png"
              />
            </div>

            <div className="flex flex-col items-end gap-2 text-end w-1/2">
              <h2 className="text-xl font-normal uppercase">James</h2>
              <h1 className="text-2xl font-bold">CG 04 2121</h1>
              <h3 className="text-xl font-semibold uppercase">
                hyndai verna zxf 80ti
              </h3>
              <h3 className="text-xl flex gap-5 items-center">
                <FaStar />
                4.5
              </h3>
            </div>
          </div>

          {/* input line and button */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 items-center  p-3 border-b-2 w-full border-gray-200">
              <div className="border-2  flex items-center justify-center rounded-xl  border-gray-200">
                <input
                  type="text"
                  placeholder="Send a message"
                  className="py-4 rounded-xl text-lg px-5 outline-0"
                />
                <span className="text-2xl">
                  <IoMdSend className=" hover:scale-125" />
                </span>
              </div>
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
        <button className="px-6 py-3 rounded-xl bg-green-400 w-full text-white font-semibold mt-4">
          Make a Payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
