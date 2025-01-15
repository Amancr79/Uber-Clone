import PropTypes from "prop-types"


const VehiclePanel = (props) => {
    const vehicleData=[
        {
            "imagePath":"https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
            "name":"UberGo",
            "time":"10 min away",
            "decr":"Affordable,compact rides",
            "fare":"Rs173.22"
        },
        {
            "imagePath":"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
            "name":"Moto",
            "time":"10 min away",
            "decr":"Affordable,moto rides",
            "fare":"Rs57.50"
        },
        {
            "imagePath":"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
            "name":"Auto",
            "time":"10 min away",
            "decr":"Affordable,compact rides",
            "fare":"Rs113.45"
        }
    ]
  return (
    <div>
          <h2 className="flex justify-center w-full items-center"><i onClick={()=>{props.setVehiclePanel(false)}} className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h2>
          <h3 className="text-xl font-semibold mb-3 pt-2">Choose your Vehicle</h3>
          {
            vehicleData.map((elem,idx)=>{
                return   <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} key={idx} className=" w-full flex mb-2 p-3 items-center justify-between border-2 active:border-black rounded-xl ">
                <img className="h-14" src={elem.imagePath} alt="" />
                <div className="flex flex-col w-1/2">
                  <h3 className="font-bold text-lg">{elem.name} <span><i className="ri-user-fill"></i>3</span></h3>
                  <h4 className="font-medium">{elem.time}</h4>
                  <p className="text-gray-600 text-xs">{elem.decr}</p>
                </div>
                <h4 className="text-1xl font-bold text-gray-800">{elem.fare ==="" ?'NDY' : elem.fare}</h4>
            </div>
            })
          }
    </div>
  )
}

VehiclePanel.propTypes = {
    setVehiclePanel: PropTypes.func.isRequired,
    setConfirmRidePanel:PropTypes.func.isRequired
}

export default VehiclePanel