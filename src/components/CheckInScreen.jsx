import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Home,
  Compass,
  Key,
  CircleHelp,
} from "lucide-react";
import { Link } from "react-router-dom";

const CheckInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg p-4 shadow-lg h-full">
        <div className="flex items-center mb-4">
          <Link to="/home">
            <ArrowLeft className="w-6 h-6 mr-4" />
          </Link>
          <h1 className="text-xl font-semibold">Check In</h1>
        </div>

        <div className="relative mb-6">
          <img
            src="https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?t=st=1729416953~exp=1729420553~hmac=97c03365822572281f849a0210154fa1e3fc2271013d3febb9c1a69feeec9308&w=996"
            alt="Piccadilly Hotel"
            className="w-full h-72 object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-2xl">
            <h2 className="text-white text-xl font-semibold">
              Piccadilly Hotel
            </h2>
            <div className="flex items-center text-white">
              <MapPin size={16} className="mr-1" />
              <p className="text-sm">Brooklyn, NY 112</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
            <p className="text-sm font-semibold">
              $ 147 <span className="text-xs font-normal">/ person</span>
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Booking Details</h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <Calendar className="w-6 h-6 mr-4 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Dates</p>
              <p className="text-sm font-semibold">Wed, 10 jul - Thu, 11 jul</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <Users className="w-6 h-6 mr-4 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Guests</p>
              <p className="text-sm font-semibold">1 room . 1 Guest</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-4">
            <Users className="w-6 h-6 mr-4 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Booking For</p>
              <p className="text-sm font-semibold">1 room . 1 Guest</p>
            </div>
          </div>
        </div>
        <button className="w-full py-3 bg-blue-500 text-white rounded-full font-semibold mb-4">
          Check In
        </button>

        <div className="bg-blue-500 rounded-full p-4 flex justify-between items-center space-x-4">
          <Link to="/home" className="p-2">
            <Home size={24} className="text-gray-100" />
          </Link>
          <Link to="/checkin" className="relative inline-block pb-1">
            <Calendar size={24} className="text-gray-100" />
            <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-100"></div>
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

export default CheckInPage;
