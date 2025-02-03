import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import DriverDetails from "../components/DriverDetails";
import RidePOPup from "../components/RidePOPup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmedRidePOPup from "../components/ConfirmedRidePOPup";

function DriverHome() {
  const [ridePopupPannel, setRidePopupPAnnel] = useState(true);
  const [confirmedRidePopupPannel, setConfirmedRidePopupPAnnel] =
    useState(false);

  const confirmedRidePopupPannelRef = useRef(null);
  const ridePopupPannelRef = useRef(null);
  useGSAP(() => {
    if (ridePopupPannel) {
      gsap.to(ridePopupPannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPannel]);
  useGSAP(() => {
    if (confirmedRidePopupPannel) {
      gsap.to(confirmedRidePopupPannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmedRidePopupPannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRidePopupPannel]);

  return (
    <div className="h-screen">
      <div className="flex fixed  top-0   items-center p-4">
        <img
          className="w-16 
        "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/driver-logout"}
          className="w-12 h-12  bg-white rounded-full flex cursor-pointer items-center justify-center shadow-lg"
        >
          <LuLogOut className="text-xl" />
        </Link>
      </div>

      <div className="h-1/2 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="map image"
        />
      </div>
      <div className="h-1/2 p-4 ">
        <DriverDetails />
      </div>
      <div
        ref={ridePopupPannelRef}
        className="fixed bottom-0 bg-white z-10 py-10 w-full px-3    pt-14"
      >
        <RidePOPup
          ridePopupPannel={ridePopupPannel}
          setConfirmedRidePopupPAnnel={setConfirmedRidePopupPAnnel}
          setRidePopupPAnnel={setRidePopupPAnnel}
        />
      </div>
      <div
        ref={confirmedRidePopupPannelRef}
        className="fixed bottom-0 h-screen bg-white z-10 py-10 w-full px-3    pt-14"
      >
        <ConfirmedRidePOPup
          ConfirmedridePopupPannel={confirmedRidePopupPannel}
          setConfirmedRidePopupPAnnel={setConfirmedRidePopupPAnnel}
          setRidePopupPAnnel={setRidePopupPAnnel}
        />
      </div>
    </div>
  );
}

export default DriverHome;
