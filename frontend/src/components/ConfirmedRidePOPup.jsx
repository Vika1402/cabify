import { FaAmazonPay, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function ConfirmedRidePOPup(props) {
  return (
    <div>
      <div>
        <h5
          onClick={() => {
            props.setConfirmedRidePopupPAnnel(false);
          }}
          className="p-1 text-2xl font-semibold flex items-center justify-center absolute top-0 w-full text-gray-400"
        >
          <IoIosArrowDown />
        </h5>
        <h3 className="text-2xl p-3 top-0 font-semibold">
          Confirm this ridde to start
        </h3>
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
                ₹200 <br /> <p className="text-sm">Online</p>
              </span>
            </div>
          </div>
        </div>

        <button className="p-3 rounded-xl bg-green-500 w-full text-white  font-semibold mt-4">
          Confirm
        </button>
        <button
          onClick={() => {
            props.setConfirmedRidePopupPAnnel(false);

            props.setRidePopupPAnnel(false);
          }}
          className="p-3 rounded-xl bg-red-600 w-full text-white font-semibold mt-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmedRidePOPup;
