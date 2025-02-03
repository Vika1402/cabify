import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function VehicalPannel(props) {
  return (
    <div>
      <h5
        onClick={() => props.setVehicalPannel(false)}
        className="p-1 text-2xl font-semibold flex items-center justify-center absolute top-0 w-full text-gray-400"
      >
        <IoIosArrowDown />
      </h5>
      <h3 className="text-2xl p-3 top-0 font-semibold">Choose a Vehical</h3>
      <div
        onClick={() => {
          props.setSelecetdVehicalPannel(true);
          props.setVehicalPannel(false);
        }}
        className="flex items-start justify-between w-full border-2 active:border-black    p-3 rounded-xl mb-2"
      >
        <img
          className="h-10 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeAq9E52gBgABElnIPJ4BXYzFdY5HQjvY0W5h_2sw8nvWeb5ZNf7Ga_BTqoGNZU6jy2k&usqp=CAU"
          alt="car_png"
        />
        <div>
          <h4 className="flex items-center gap-2 font-medium text-lg">
            CabifyGo{" "}
            <span className="flex items-center text-sm">
              <FaUser />4
            </span>
          </h4>
          <h3 className="text-sm font-semibold tracking-wide"> 4 min away </h3>
          <h3 className="text-xs text-gray-700">Affordable, Compact rides </h3>
        </div>

        <h5 className="text-2xl font-semibold">₹200</h5>
      </div>
      <div
        onClick={() => {
          props.setSelecetdVehicalPannel(true);
          props.setVehicalPannel(false);
        }}
        className="flex items-start justify-between w-full border-2 active:border-black    p-3 rounded-xl mb-2"
      >
        <img
          className="h-10 "
          src="https://t3.ftcdn.net/jpg/04/09/53/66/240_F_409536657_faFtjojQgOzu1m27q35tPaljBjFPME8r.jpg"
          alt="car_png"
        />
        <div>
          <h4 className="flex items-center gap-2 font-medium text-lg">
            Moto{" "}
            <span className="flex items-center text-sm">
              <FaUser />1
            </span>
          </h4>
          <h3 className="text-sm font-semibold tracking-wide"> 5 min away </h3>
          <h3 className="text-xs text-gray-700">
            Affordable, Motercycle rides{" "}
          </h3>
        </div>

        <h5 className="text-2xl font-semibold">₹89</h5>
      </div>
      <div
        onClick={() => {
          props.setSelecetdVehicalPannel(true);
          props.setVehicalPannel(false);
        }}
        className="flex items-start justify-between w-full border-2 active:border-black   p-3 rounded-xl mb-2"
      >
        <img
          className="h-10"
          src="https://5.imimg.com/data5/SELLER/Default/2024/9/450594803/NC/LY/UZ/16402/piaggio-ape-auto-rickshaw-diesel-500x500.png"
          alt="auto_png"
        />
        <div>
          <h4 className="flex items-center gap-2 font-medium text-lg">
            Auto{" "}
            <span className="flex items-center text-sm">
              <FaUser />1
            </span>
          </h4>
          <h3 className="text-sm font-semibold tracking-wide"> 10 min away </h3>
          <h3 className="text-xs text-gray-700">Affordable, Auto rides </h3>
        </div>

        <h5 className="text-2xl font-semibold">₹55</h5>
      </div>
    </div>
  );
}

export default VehicalPannel;
