import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import DriverLogin from "./pages/DriverLogin";
import DriverSignup from "./pages/DriverSignup";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import DriverHome from "./pages/DriverHome";
import DriverProtectWrapper from "./pages/DriverProtectWrapper";
import DriverLogout from "./pages/DriverLogout";
import Riding from "./pages/Riding";
import DriverRiding from "./pages/DriverRiding";
import FinishRide from "./pages/FinishRide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-signup" element={<DriverSignup />} />
        <Route path="/driver-ridding" element={<DriverRiding />} />
        <Route path="/finish-ride" element={<FinishRide />} />

        <Route
          path="/driver-home"
          element={
            <DriverProtectWrapper>
              <DriverHome />
            </DriverProtectWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/driver-logout"
          element={
            <DriverProtectWrapper>
              <DriverLogout />
            </DriverProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
