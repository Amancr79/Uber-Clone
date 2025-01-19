import {useRef, useState} from "react"
import { Link } from "react-router-dom"
import DriverDetails from "../components/DriverDetails"
import RidePopUp from "../components/RidePopUp"
import {useGSAP} from "@gsap/react"
import {gsap} from 'gsap'
import ConfirmRidePopUp from "../components/ConfirmRidePopUp"

function CaptainHome() {
  const ridePopUpRef=useRef();
  const confirmRidePopUpRef=useRef();
  const [ridePopUpPanel,setRidePopUpPanel]=useState(true);
  const [confirmRidePopUpPanel,setConfirmRidePopUpPanel]=useState(false);
  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(0)'
      })
    }else
    {
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpRef.current,{
        transform:'translateY(0)'
      })
    }else
    {
      gsap.to(confirmRidePopUpRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])
  return (
    <div className="h-screen">
      <div>
      <img
        className="w-16 left-5 top-5 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="error"
      />
      <Link to='/captain-login'className="right-2 top-2 flex fixed bg-white w-10 h-10 rounded-full justify-center items-center">
      <i className="text-xl font-medium ri-logout-box-r-line"></i>
     </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover"
          src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-5">
         <DriverDetails/>
      </div>
      <div ref={ridePopUpRef} className="w-full fixed z-10 bg-white px-3 py-3 translate-y-full bottom-0">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpRef} className="w-full h-screen fixed z-10 bg-white px-3 py-3 translate-y-full bottom-0">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>  
      </div>
    </div>
  )
}
export default CaptainHome