import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DriverDataContext } from "../context/DriverContext";
import axiosInstance from "../utility/axiosInstant";

const DriverProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { driver, setDriver } = useContext(DriverDataContext);
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/driver-login");
    }
  }, [token, navigate]);

  useEffect(() => {
    axiosInstance
      .get("/driver/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setDriver(response.data.driver);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/driver-login");
      });
  }, [navigate, setDriver, token]);

  if (isloading) {
    return <div>loading...</div>;
  }
  return <>{children}</>;
};

export default DriverProtectWrapper;
