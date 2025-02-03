import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPannel from "../components/LocationSearchPannel";
import { FaUser } from "react-icons/fa";
function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const [vehicalPannel, setVehicalPannel] = useState(false);
  //use ref use full for direct manipulate dom

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
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
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
            <div className="line absolute h-16 w-1 left-10 mt-10  rounded-full bg-gray-800"></div>
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
            vehicalPannel={vehicalPannel}
            setVehicalPannel={setVehicalPannel}
          />
        </div>
      </div>

      <div className="fixed bottom-0 bg-white z-10 p-6 w-full px-3 translate-y-full">
        <h5 className="text-2xl p-3 top-0 font-semibold">Choose a Vehical</h5>
        <div className="flex items-start justify-between w-full border-2 active:border-black    p-3 rounded-xl mb-2">
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
            <h3 className="text-sm font-semibold tracking-wide">
              {" "}
              4 min away{" "}
            </h3>
            <h3 className="text-xs text-gray-700">
              Affordable, Compact rides{" "}
            </h3>
          </div>

          <h5 className="text-2xl font-semibold">₹200</h5>
        </div>
        <div className="flex items-start justify-between w-full border-2 active:border-black    p-3 rounded-xl mb-2">
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
            <h3 className="text-sm font-semibold tracking-wide">
              {" "}
              5 min away{" "}
            </h3>
            <h3 className="text-xs text-gray-700">
              Affordable, Motercycle rides{" "}
            </h3>
          </div>

          <h5 className="text-2xl font-semibold">₹89</h5>
        </div>
        <div className="flex items-start justify-between w-full border-2 active:border-black   p-3 rounded-xl mb-2">
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
            <h3 className="text-sm font-semibold tracking-wide">
              {" "}
              10 min away{" "}
            </h3>
            <h3 className="text-xs text-gray-700">Affordable, Auto rides </h3>
          </div>

          <h5 className="text-2xl font-semibold">₹55</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
