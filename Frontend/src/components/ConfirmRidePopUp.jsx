import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmRidePopUp = (props) => {

    const [otp,setOTP]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <h2 className="flex justify-center w-full items-center">
        <i
          onClick={() => {}}
          className="text-3xl text-gray-300 ri-arrow-down-wide-line"
        ></i>
      </h2>
      <h3 className="text-2xl font-medium">Confirm your ride</h3>
      <div className="flex flex-col gap-2 justify-between items-center mt-2">
        <div className="w-full p-3 flex justify-between items-center bg-yellow-400 rounded-lg">
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
              alt=""
            />
            <h4 className="text-xl font-medium">Rohan Raj</h4>
          </div>
          <h4 className="font-medium">2.5 KM</h4>
        </div>
        <div className="w-full flex justify-start items-center p-3 border-b-2 border-gray">
          <i className="text-xl mr-3 ri-map-pin-fill"></i>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold">N-110/4A</h2>
            <h4 className="text-sm text-gray-400">
              Laxmi Nagar, New Delhi, Delhi
            </h4>
          </div>
        </div>
        <div className="w-full flex justify-start items-center p-3 border-b-2 border-gray">
          <i className="text-xl mr-3 ri-square-fill"></i>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold">91 SpringBoot/D-56</h2>
            <h4 className="text-sm text-gray-400">Noida, Uttar Pradesh</h4>
          </div>
        </div>
        <div className="w-full flex justify-start items-center p-3">
          <i className="text-xl mr-3 ri-bank-card-fill"></i>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold">Rs 173.23</h2>
            <h4 className="text-sm text-gray-400">Cash Cash</h4>
          </div>
        </div>
        <div className="mt-5 w-full">
          <form onSubmit={(e)=>{
              submitHandler(e);
          }}>
            <input 
            value={otp}
            onChange={(e)=>{
                setOTP(e.target.value)
            }}
            className="bg-[#eee] text-lg font-semibold font-mono w-full p-2 rounded-lg mb-2" type="text" placeholder="Enter your OTP" />
            <Link
              to="/driver-riding"
              className="flex justify-center mt-2 bg-green-600 rounded-lg font-semibold w-full text-white px-4 py-2"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="mt-2 bg-red-600 rounded-lg font-semibold w-full text-white px-4 py-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ConfirmRidePopUp.propTypes = {
  setRidePopUpPanel: PropTypes.func.isRequired,
  setConfirmRidePopUpPanel: PropTypes.func.isRequired,
};

export default ConfirmRidePopUp;
