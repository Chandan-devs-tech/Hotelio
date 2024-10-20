import { ArrowLeft, Delete } from "lucide-react";
import { Link } from "react-router-dom";

const OTPScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg p-4 shadow-lg h-full">
        <div className="flex items-center mb-6">
          <Link to="/" state={{ from: "previousPage" }}>
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold ml-4">Verify OTP</h1>
        </div>

        <div className="flex justify-between mb-8">
          <input
            className="w-12 h-12 text-center border border-black rounded-md"
            maxLength={1}
          />
          <input
            className="w-12 h-12 text-center border border-black rounded-md"
            maxLength={1}
          />
          <input
            className="w-12 h-12 text-center border border-black rounded-md"
            maxLength={1}
          />
          <input
            className="w-12 h-12 text-center border border-black rounded-md"
            maxLength={1}
          />
        </div>

        <Link
          to="/home"
          className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold mb-4 text-center block"
        >
          Verify
        </Link>

        <p className="text-blue-600 text-center mb-8">Resend OTP</p>

        <div className="mt-auto">
          <p className="text-center text-gray-500 mb-4">From Messages</p>
          <p className="text-center font-semibold mb-6">0123</p>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="text-center">
                <p className="text-2xl font-semibold">{num}</p>
                <p className="text-xs text-gray-500">
                  {num === 1
                    ? ""
                    : num === 2
                    ? "ABC"
                    : num === 3
                    ? "DEF"
                    : num === 4
                    ? "GHI"
                    : num === 5
                    ? "JKL"
                    : num === 6
                    ? "MNO"
                    : num === 7
                    ? "PQRS"
                    : num === 8
                    ? "TUV"
                    : "WXYZ"}
                </p>
              </div>
            ))}
            <div className="text-center">
              <p className="text-2xl font-semibold">0</p>
            </div>
            <div className="text-center">
              <Delete className="w-6 h-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;
