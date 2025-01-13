import {PropTypes} from 'prop-types';
import {createContext,useState} from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const CaptainDataContext=createContext();
const CaptainContext=({children})=> {
  const [captain,setCaptain]=useState({
    email:'',
    fullname:{
        firstname:'',
        lastname:'',
    },
    vehicle:{
      color:'',
      plate:'',
      capacity:0,
      vehicleType:''
    }
  });
  return (
   <div>
      <CaptainDataContext.Provider value={{captain,setCaptain}}>
        {children}
      </CaptainDataContext.Provider>
   </div>
  )
}


CaptainContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaptainContext