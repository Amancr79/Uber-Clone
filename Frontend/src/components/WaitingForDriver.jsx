import PropTypes from "prop-types"


const WaitForDriver = (props) => {
  return (
    <div>
      <h2 className="flex justify-center w-full items-center">
        <i
          onClick={()=>{props.setWaitingForDriver(false)}}
          className="text-3xl text-gray-300 ri-arrow-down-wide-line"
        ></i>
      </h2>
      <h3 className="text-2xl font-medium">Meet at pickup point</h3>
      <div className="flex justify-between mt-2">
      <img
          className="h-16"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="flex flex-col items-end">
          <h4 className="font-medium">SANTH</h4>
          <h3 className="text-xl font-bold -mt-1">KA15AK00-0</h3>
          <p className="text-gray-400 -mt-1">White Suzuki S-presso LXI</p>
          <i className="text-gray-600 ri-star-fill">4.9</i>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
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
      </div>
    </div>
  )
}

WaitForDriver.propTypes={
  setWaitingForDriver: PropTypes.func.isRequired
}

export default WaitForDriver