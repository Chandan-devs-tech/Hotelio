import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="w-full max-w-sm overflow-hidden bg-white shadow-lg h-full">
        <div className="relative h-80">
          <img
            src="https://img.freepik.com/free-photo/miami-bayside-landscape_23-2151636450.jpg?t=st=1729406164~exp=1729409764~hmac=4b48e44712b457d7953558f88eedf266fe61f759acb9ca3448df151698e79036&w=1380"
            alt="Luxury hotel poolside"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <h2 className="text-white text-xl font-semibold">
              Experience the best hotel stays
            </h2>
          </div>
        </div>
        <div className="p-4 mt-8">
          <form className="space-y-4">
            <div className="flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="Mobile Number/Email id"
                className="w-full py-2 px-3 bg-transparent focus:outline-none"
              />
            </div>
            <Link
              to="/otp"
              className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-200 text-center block"
            >
              Get OTP
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
