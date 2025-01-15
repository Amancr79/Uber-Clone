

import PropTypes from 'prop-types';

const LocationSearchPanel=(props)=> {
  const locations =[
    "N-110,Near Lalita Park, Laxmi Nagar,New Delhi",
    "Ward No-03, Koilwar, Mishra Colony, Bihar",
    "RZ-244, M-Block, West Delhi",
    "240B Janakpuri, C2B,Near MSIT, New Delhi"
  ]
  return (
    <div>
      {
        locations.map(function(elem,key){
          return <div onClick={()=>{props.setVehiclePanel(true),props.setOpenPanel(false)}} key={key} className="flex items-center border-2 active:border-black border-gray-100 justify-start m-3 px-3 py-3 rounded">
          <h2 className="bg-[#eee] px-2 py-1 mr-3 rounded-full"><i className="ri-map-pin-line"></i></h2>
          <h4>{elem}</h4>
     </div>
        })
      }
    </div>
  )
}

LocationSearchPanel.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
  setOpenPanel: PropTypes.func.isRequired
};

export default LocationSearchPanel