import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className=" h-screen relative">
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
          <h4 className="text-2xl  font-semibold">Find Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              onClick={() => setPannel(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-gray-100 px-8 py-2 rounded-lg w-full mt-5 outline-0"
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
        <div className="bg-red-400"></div>
      </div>
    </div>
  );
}

export default Home;
