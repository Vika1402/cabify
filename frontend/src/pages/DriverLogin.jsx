import React, { useState } from "react";
import { Link } from "react-router-dom";

function DriverLogin() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [captainData, setCaptainData] = useState({});
  console.log(email);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setCaptainData({
      email: email,
      password: password,
    });

    setEmail("");
    setPasword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between bg-gray-100">
      <div>
        <img
          className="w-17 mb-10 bg-transparent"
          src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)} className=" flex flex-col">
          <h3 className="text-xl">Whats your Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
            placeholder="email@example.com"
          />
          <h3 className="text-xl mt-4">Enter the Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
            placeholder="password"
          />
          <button
            type="submit"
            className="px-6 py-3 mt-4 bg-black text-white text-xl rounded-sm mb-2"
          >
            Login
          </button>
          <p className="text-center">
            Join us?{" "}
            <Link to={"/driver-signup"} className="text-orange-500">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to={"/login"}
          className="px-6 py-3 mt-4 flex items-center justify-center  bg-orange-500 text-white text-xl rounded-sm w-full"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}
export default DriverLogin;
