import axios from "axios";
import React from "react";
import axiosInstance from "../utility/axiosInstant";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    axiosInstance
      .post(
        "/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  }, [navigate, token]);
  return <div>UserLogout</div>;
}

export default UserLogout;
