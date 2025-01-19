import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const FinishRide = (props) => {
  return (
    <div>
      <h2 className="flex justify-center w-full items-center">
        <i
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
          className="text-3xl text-gray-300 ri-arrow-down-wide-line"
        ></i>
      </h2>
      <h3 className="text-2xl font-medium">Finish this ride</h3>
      <div className="flex flex-col gap-2 justify-between items-center mt-2">
        <div className="w-full p-3 flex justify-between items-center border-2 border-black rounded-lg">
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
          <Link
            to="/captain-home"
            className="flex text-lg justify-center mt-2 bg-green-600 rounded-lg font-semibold w-full text-white px-4 py-2"
          >
            Finish Ride
          </Link>
          <p className="flex justify-center text-sm text-red-400 mt-2">click on finish ride if you have got the payment</p>
        </div> 
      </div>
    </div>
  );
};

FinishRide.propTypes = {
  setFinishRidePanel: PropTypes.func.isRequired,
};

export default FinishRide;
