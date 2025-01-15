import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitingForDriver";

const UserHome = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const panelRef = useRef(null);
  const panelCLoseRef = useRef(null);
  const vehiclePanelref = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const confirmRideRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const lookingForRideRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (openPanel) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCLoseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCLoseRef.current, {
          opacity: 0,
        });
      }
    },
    [openPanel]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelref.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (lookingForDriverPanel) {
        gsap.to(lookingForRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingForRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForDriverPanel]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 left-5 top-5 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="error"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover bg-transparent"
          src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-end h-screen top-0 absolute">
        <div className="bg-white p-6 h-[30%] rounded-lg relative">
          <h5
            ref={panelCLoseRef}
            onClick={() => {
              setOpenPanel(false);
            }}
            className="absolute opacity-0 top-3 right-3 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line h-16 w-1 top-[45%] left-10 absolute bg-gray-800 rounded"></div>
            <input
              className="bg-[#eee] w-full px-10 py-3 rounded-lg text-lg mt-3"
              type="text"
              placeholder="Enter pickup point"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setOpenPanel(true);
              }}
            />
            <input
              className="bg-[#eee] w-full px-10 py-3 rounded-lg text-lg mt-3"
              type="text"
              placeholder="Enter destination point"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setOpenPanel(true);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setOpenPanel={setOpenPanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelref}
        className="fixed w-full z-10 bottom-0  px-3 py-3 translate-y-full bg-white"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white"
      >
        <ConfirmedVehicle
          setConfirmRidePanel={setConfirmRidePanel}
          setLookingForDriverPanel={setLookingForDriverPanel}
        />
      </div>
      <div
        ref={lookingForRideRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white"
      >
        <LookingForDriver setLookingForDriverPanel={setLookingForDriverPanel} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white">
         <WaitForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default UserHome;
