import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [userData, setUserData] = useState({});
  console.log(email);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setUserData({
      email: email,
      password: password,
    });

    setEmail("");
    setPasword("");
  };
  //console.log(userData);

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png"
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
            New Here?{" "}
            <Link to={"/signup"} className="text-cyan-700">
              Create new Acoount
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to={"/driver-login"}
          className="px-6 py-3 mt-4 flex items-center justify-center bg-cyan-700 text-white text-xl rounded-sm w-full"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
