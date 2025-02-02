import React, { useState } from "react";
import { Link } from "react-router-dom";

function DriverSignup() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  console.log(email);
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(email, password);
    setUserData({
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
    });

    setEmail("");
    setPasword("");
    setFirstname("");
    setLastname("");
  };
  //console.log(userData);

  return (
    <div className="p-7 h-screen flex flex-col justify-between  bg-gray-100 ">
      <div>
        <img
          className="w-17 mb-10 bg-transparent"
          src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)} className=" flex flex-col">
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

          <h3 className="text-xl mt-3">Whats your Captain&apos;s Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 rounded-sm px-4 py-2 text-lg mt-1"
            placeholder="email@example.com"
          />
          <h3 className="text-xl mt-4">Enter Password</h3>
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
            Signup
          </button>
          <p className="text-center">
            Already have an account?{" "}
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
          Uber's Privacy Notice describes the information we collect, how it is
          used and shared, and your choices regarding this information.
        </p>
      </div>
    </div>
  );
}

export default DriverSignup;
