import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext, { UserDataContext } from "../context/UserContext";
import axiosInstance from "../utility/axiosInstant";
function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  // console.log(email);
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(email, password);
    const newUser = {
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
    };
    const response = await axiosInstance.post("/user/register", newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPasword("");
    setFirstname("");
    setLastname("");
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
          <h3 className="text-xl">Whats your Name</h3>
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

          <h3 className="text-xl mt-3">Whats your Email</h3>
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
            Create account
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-cyan-700">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="px-6 py-3 mt-4 flex items-center justify-center  text-[12px] leading-tight rounded-sm w-full">
          Uber&apso;s Privacy Notice describes the information we collect, how
          it is used and shared, and your choices regarding this information.
        </p>
      </div>
    </div>
  );
}
export default UserSignup;
