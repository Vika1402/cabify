import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function DriverRiding() {
  const [finishRidePannel, setFinishRidePannel] = useState(false);
  const finishRidePannelRef = useRef(null);
  useGSAP(() => {
    if (finishRidePannel) {
      gsap.to(finishRidePannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePannel]);
  return (
    <div className="h-screen relative">
      <div className="flex fixed  top-0   items-center p-4">
        <img
          className="w-16 
    "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/driver-logout"}
          className="w-12 h-12 bg-white rounded-full flex cursor-pointer items-center justify-center shadow-lg"
        >
          <LuLogOut className="text-xl" />
        </Link>
      </div>

      <div className="h-4/5 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="map image"
        />
      </div>
      <div
        onClick={() => setFinishRidePannel(true)}
        className="h-1/5 px-6 trans bg-yellow-400 justify-between items-center flex-col font-semibold py-1"
      >
        <div className="w-full flex justify-center mb-4">
          <IoIosArrowDown className="text-xl text-white" />
        </div>
        <div className="flex items-center gap-4 ">
          <h4 className="text-xl"> 4 km away</h4>
          <button className="py-3 px-10 rounded-xl bg-green-400 text-white tracking-wider  font-semibold">
            Complete Ride
          </button>
        </div>
      </div>
      <div
        ref={finishRidePannelRef}
        className="fixed bottom-0 bg-white z-10 py-10 w-full px-3 translate-y-full pt-14"
      ></div>
    </div>
  );
}

export default DriverRiding;
