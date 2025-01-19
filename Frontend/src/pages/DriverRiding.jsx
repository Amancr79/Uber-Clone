import { Link } from "react-router-dom";
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { useRef, useState } from "react";
import FinishRide from "../components/FinishRide";

const DriverRiding = () => {

    const [finishRidePanel,setFinishRidePanel]=useState(false);
    const finishRidePanelRef=useRef(null);

    useGSAP(function(){
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current,{
               transform:"translateY(0)"
            })
        }else
        {
            gsap.to(finishRidePanelRef.current,{
                transform:"translateY(100%)"
             })
        }
    },[finishRidePanel])
  return (
    <div className="h-screen relative">
      <div>
        <img
          className="w-16 left-5 top-5 absolute"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="error"
        />
        <Link
          to="/captain-login"
          className="right-2 top-2 flex fixed bg-white w-10 h-10 rounded-full justify-center items-center"
        >
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif"
          alt=""
        />
      </div>
      <div onClick={()=>{
        setFinishRidePanel(true);
      }} className="flex flex-col items-center py-2 w-full h-1/5 bg-yellow-400"> 
         <h2 className=""><i className="text-2xl font-bold ri-arrow-up-wide-line"></i></h2>
         <div className="flex w-full items-center justify-between p-5">
         <h4 className="font-medium text-xl ">4 KM Away</h4>
         <button className="bg-green-600 px-3 py-2 rounded-lg text-white font-medium ">Complete Ride</button>
         </div>
      </div>
     <div ref={finishRidePanelRef} className="w-full fixed z-10 bg-white bottom-0 translate-y-0 p-3">
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
     </div>
    </div>
  );
};

export default DriverRiding;
