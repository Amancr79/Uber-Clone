import PropTypes from "prop-types";

const LocationSearchPanel = (props) => {

  const handleSuggestionClick = (suggestions) => {
    if (props.activeField === "pickup") {
      props.setPickup(suggestions);
    } else if (props.activeField === "destination") {
      props.setDestination(suggestions);
    }
    props.setVehiclePanel(true), 
    props.setOpenPanel(false);
  };
  return (
    <div>
      {props.suggestions.map((elem, idx) => {
        return (
          <div
            onClick={() => {
              handleSuggestionClick(elem)
            }}
            key={idx}
            className="flex items-center border-2 active:border-black border-gray-100 justify-start m-3 px-3 py-3 rounded"
          >
            <h2 className="bg-[#eee] px-2 py-1 mr-3 rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4>{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

LocationSearchPanel.propTypes = {
  suggestions: PropTypes.array.isRequired,
  setVehiclePanel: PropTypes.func.isRequired,
  setOpenPanel: PropTypes.func.isRequired,
  setPickup:PropTypes.func.isRequired,
  setDestination:PropTypes.func.isRequired,
  activeField:PropTypes.string.isRequired
};

export default LocationSearchPanel;
