import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPannel from "../components/LocationSearchPannel";
import { FaUser } from "react-icons/fa";
import VehicalPannel from "../components/VehicalPannel";
import SelectedVehical from "../components/SelectedVehical";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";
function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const [vehicalPannel, setVehicalPannel] = useState(false);
  const [selectedVehicalPannel, setSelecetdVehicalPannel] = useState(false);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);
  const [VehicalFound, setVehicalFound] = useState(false);
  const VehicalFoundRef = useRef(null);
  const vehicalPannelRef = useRef(null);
  const selectedVehicalPannelRef = useRef(null);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  useGSAP(() => {
    if (pannel) {
      gsap.to(pannelRef.current, { height: "70%", duration: 1 });
      gsap.to(pannelCloseRef.current, { rotate: 0, duration: 1 });
    } else {
      gsap.to(pannelRef.current, { height: 0, duration: 1 });
      gsap.to(pannelCloseRef.current, { rotate: 180, duration: 1 });
    }
  }, [pannel]);
  useGSAP(() => {
    if (vehicalPannel) {
      gsap.to(vehicalPannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicalPannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicalPannel]);
  useGSAP(() => {
    if (selectedVehicalPannel) {
      gsap.to(selectedVehicalPannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(selectedVehicalPannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [selectedVehicalPannel]);
  useGSAP(() => {
    if (VehicalFound) {
      gsap.to(VehicalFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(VehicalFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [VehicalFound]);
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [VehicalFound]);
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16  absolute left-5 top-5
        "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-center object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className="absolute top-0 h-screen  w-full flex flex-col justify-end ">
        <div className="h-[30%] p-5 bg-white">
          <h5
            ref={pannelCloseRef}
            onClick={() => setPannel(false)}
            className="text-gray-500 text-2xl right-6   absolute "
          >
            <IoIosArrowDown />
          </h5>
          <h4 className="text-2xl  font-semibold">Find Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 left-10 mt-10  rounded-full bg-gray-500"></div>
            <input
              onClick={() => setPannel(true)}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-gray-100 px-8 py-2  rounded-lg w-full mt-7 outline-0"
              type="text"
              placeholder="Add a Pick Up Location"
            />
            <input
              onClick={() => setPannel(true)}
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
              className="bg-gray-100 px-8 py-2 rounded-lg mt-2 w-full outline-0"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={pannelRef} className="bg-white p-5">
          <LocationSearchPannel
            pannel={pannel}
            setPannel={setPannel}
            vehicalPannel={vehicalPannel}
            setVehicalPannel={setVehicalPannel}
          />
        </div>
      </div>

      <div
        ref={vehicalPannelRef}
        className="fixed bottom-0 bg-white z-10 py-10 w-full px-3 translate-y-full pt-14"
      >
        <VehicalPannel
          setVehicalPannel={setVehicalPannel}
          setSelecetdVehicalPannel={setSelecetdVehicalPannel}
        />
      </div>
      <div
        ref={selectedVehicalPannelRef}
        className="fixed bottom-0 bg-white z-10 py-10 w-full px-3 translate-y-full pt-14"
      >
        <SelectedVehical
          setVehicalPannel={setVehicalPannel}
          setSelecetdVehicalPannel={setSelecetdVehicalPannel}
          setVehicalFound={setVehicalFound}
        />
      </div>
      <div
        ref={VehicalFoundRef}
        className="fixed bottom-0 bg-white z-10 py-10 w-full px-3 translate-y-full pt-14"
      >
        <LookingForDriver setVehicalFound={setVehicalFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed bottom-0 bg-white z-10 py-10 w-full px-3   pt-14"
      >
        <WaitForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
}

export default Home;
