import { useEffect } from "react";
import axiosInstance from "../utility/axiosInstant";
import { useNavigate } from "react-router-dom";

function DriverLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axiosInstance
      .post(
        "/driver/logout",
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
          navigate("/driver-login");
        }
      });
  }, [navigate, token]);
  return <>DriverLogout</>;
}

export default DriverLogout;
