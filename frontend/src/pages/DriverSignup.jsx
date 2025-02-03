import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DriverDataContext } from "../context/DriverContext";
import axiosInstance from "../utility/axiosInstant";

function DriverSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState(1);
  const { driver, setDriver } = useContext(DriverDataContext);

  console.log(driver);

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(email, password);
    const newDriver = {
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      vehicle: {
        type: vehicleType,
        licensePlate: licensePlate,
        color: vehicleColor,
        capacity: vehicleCapacity,
        model: vehicleModel,
      },
    };

    const response = await axiosInstance.post("/driver/register", newDriver);
    if (response.status === 200) {
      const data = response.data;
      setDriver(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPasword("");
    setFirstname("");
    setLastname("");
    setLicensePlate("");
    setVehicleCapacity("");
    setVehicleModel("");
    setVehicleType("");
    setVehicleColor("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between  bg-gray-100 ">
      <div>
        <img
          className="w-17 mb-10 bg-transparent"
          src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
          alt=""
        />
        <form
          onSubmit={(e) => submitHandler(e)}
          className=" flex flex-col text-nowrap"
        >
          <h3 className="text-xl">Whats your Captain&apos;s Name</h3>
          <div className="flex gap-4">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className=" border-2 w-1/2 rounded-sm px-4 py-2 text-lg mt-1"
              placeholder="firstname"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className=" border-2 w-1/2 rounded-sm px-4 py-2 text-lg mt-1"
              placeholder="lastname"
            />
          </div>
          <div className="">
            <h3 className="text-xl  mt-4">Email</h3>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
              placeholder="email"
            />
          </div>
          <h3 className="text-xl mt-4">Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
            placeholder="password"
          />

          <div className="flex gap-4">
            <div className="w-1/2">
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
                placeholder="Vehicle Type"
              >
                <option>select now</option>
                <option value="car">car</option>
                <option value="motorcycle">motorcycle</option>
                <option value="auto">auto</option>
              </select>
            </div>
            <div className="w-1/2">
              <input
                type="text"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
                placeholder="Vehicle Model"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                required
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
                className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
                placeholder="License Plate"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
                placeholder="Vehicle Color"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
              placeholder="Vehicle Capacity"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 mt-4 bg-black text-white text-xl rounded-sm mb-2"
          >
            Signup
          </button>
          <p className="text-center">
            Already have an account?
            <Link to={"/driver-login"} className="text-cyan-700">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p
          to={"/driver-login"}
          className="px-6 py-3 mt-4 flex items-center justify-center  text-[12px] leading-tight rounded-sm w-full"
        >
          Uber&apos;s Privacy Notice describes the information we collect, how
          it is used and shared, and your choices regarding this information.
        </p>
      </div>
    </div>
  );
}

export default DriverSignup;
