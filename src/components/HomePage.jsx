import {
  MapPin,
  Bell,
  Home,
  Calendar,
  Compass,
  Key,
  CircleHelp,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg p-4 shadow-lg h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/free-photo/young-woman-with-long-brown-hair-looking-camera-smiling-generated-by-artificial-intelligence_188544-241138.jpg?t=st=1729408998~exp=1729412598~hmac=50632cf8787fd07508ce40fd9eb20f79f35caa9ff4a8ead2a2bfdd385983d0b0&w=1060"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <div className="flex items-center">
                <MapPin size={16} className="text-red-500 mr-1" />
                <p className="text-sm font-semibold">Brooklyn, NY 112</p>
              </div>
            </div>
          </div>
          <Bell size={24} />
        </div>

        <div className="bg-[url('https://img.freepik.com/free-photo/futuristic-landscape-dubai_23-2151339806.jpg?t=st=1729410813~exp=1729414413~hmac=32665bd68af6558ab7f38b43b93c008d846dbc0a15967528ebefefa9bd37e0ae&w=996')] bg-cover bg-center rounded-lg shadow-lg h-96 mb-6 text-white">
          <div>
            <h2 className="text-2xl font-semibold p-2">Welcome John!</h2>
            <div className="p-6 rounded-lg mt-20 mb-24">
              <p className="mb-4">Your room number is 113. Enjoy your stay</p>
              <button className="w-full py-3 bg-blue-500 text-white rounded-full font-semibold">
                See your Room Passcode
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4">Top picks for you</h2>

        <div className="flex space-x-4">
          <div className="w-full h-44 bg-white rounded-lg shadow-lg overflow-hidden bg-[url('https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118953.jpg?t=st=1729411753~exp=1729415353~hmac=5b882940324abbd0897326bbd9e9329497eb740c1887b620a62358799afff715&w=900')] bg-cover bg-center mb-6 text-white">
            <div className="p-3">
              <h3 className="font-semibold text-sm">Room upgrades</h3>
              <p className="text-xs">2 Adults | $130</p>
            </div>
          </div>
          <div className="w-full h-44 bg-white rounded-lg shadow-lg overflow-hidden bg-[url('https://img.freepik.com/premium-photo/spa-treatment-room-with-calming-ambiance-soft-lighting-aromatic-candles_1314467-215651.jpg?w=740')] bg-cover bg-center mb-6 text-white">
            <div className="p-3">
              <h3 className="font-semibold text-sm">Spa Packages</h3>
              <p className="text-xs">$29 - $69</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-500 rounded-full p-4 flex justify-between items-center space-x-4">
          <Link to="/home" className="relative inline-block pb-1">
            <Home size={24} className="text-gray-100" />
            <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-100"></div>
          </Link>
          <Link to="/checkin" className="p-2">
            <Calendar size={24} className="text-gray-100" />
          </Link>
          <Compass size={24} className="text-gray-100" />
          <Link to="/room-lock" className="p-2">
            <Key size={24} className="text-gray-100" />
          </Link>
          <CircleHelp size={24} className="text-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
