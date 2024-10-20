import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  Calendar,
  Compass,
  Key,
  HelpCircle,
  Lock,
} from "lucide-react";

const UnlockRoomPage = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow-lg h-screen overflow-hidden w-full max-w-sm">
      <div className="flex items-center mb-8">
        <Link to="/checkin" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Unlock Your Room</h1>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="w-full max-w-xs border border-gray-300 rounded-full py-3 px-4">
          <p className="text-center text-gray-600">John Doe, Room no. 113</p>
        </div>

        <div className="relative">
          <div className="w-32 h-32 bg-blue-500 rounded-3xl flex items-center justify-center">
            <Lock className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-36 h-36 border-4 border-gray-300 rounded-full"></div>
          </div>
        </div>

        <button className="w-full max-w-xs py-3 bg-blue-500 text-white rounded-full font-semibold">
          Unlock
        </button>
      </div>

      <div className="bg-blue-500 rounded-full p-4 flex justify-between items-center">
        <Link to="/home" className="p-2">
          <Home size={24} className="text-white" />
        </Link>
        <Link to="/checkin" className="p-2">
          <Calendar size={24} className="text-white" />
        </Link>
        <Compass size={24} className="text-white" />
        <Link to="/room-lock" className="relative inline-block pb-1">
          <Key size={24} className="text-white" />
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-100"></div>
        </Link>
        <HelpCircle size={24} className="text-white" />
      </div>
    </div>
  );
};

export default UnlockRoomPage;
