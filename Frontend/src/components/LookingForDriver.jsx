import PropTypes from "prop-types"

const LookingForDriver = (props) => {
  return (
    <div>
      <h2 className="flex justify-center w-full items-center">
        <i onClick={()=>{
            props.setLookingForDriverPanel(false)
        }}
          className="text-3xl text-gray-300 ri-arrow-down-wide-line"
        ></i>
      </h2>
      <h3 className="text-2xl font-medium">Looking for driver</h3>
      <div className="border-b-4 border-blue-300 mt-2"></div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-24"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
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

LookingForDriver.propTypes={
    setLookingForDriverPanel:PropTypes.func.isRequired
}

export default LookingForDriver