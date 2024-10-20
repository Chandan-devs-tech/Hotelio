import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen.jsx";
import OTPScreen from "./components/OTPScreen.jsx";
import HomePage from "./components/HomePage.jsx";
import CheckInScreen from "./components/CheckInScreen.jsx";
import RoomLockScreen from "./components/RoomLockScreen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/checkin" element={<CheckInScreen />} />
        <Route path="/room-lock" element={<RoomLockScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
