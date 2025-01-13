import {useContext,useState} from "react"
import { Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import { CaptainDataContext } from "../context/CaptainContext";
function CaptainSignup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [plate,setPlate]=useState('');
  const [capacity,setCapacity]=useState('');
  const [color,setColor]=useState('');
  const [vehicleType,setVehicleType]=useState('');
  // eslint-disable-next-line no-unused-vars
  const {captain,setCaptain}=useContext(CaptainDataContext);
  const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const captainData={
          fullname:{
              firstname:firstName,
              lastname:lastName,
          },
          email:email,
          password:password,
          vehicle:{
            color:color,
            plate:plate,
            capacity:capacity,
            vehicleType:vehicleType
          }
        };
          const response=await axios.post('http://localhost:3000/captains/register',captainData);
          console.log("After axios call");
          console.log(response.status);
          if(response.status===201){
            const data=response.data;
            setCaptain(data.captain);

            localStorage.setItem('token',data.token);
            navigate('/captain-login');
          }


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setPlate('');
        setCapacity('');
        setColor('');
        setVehicleType('');
    }
    
    
  return (
    <div className="ml-5 mr-5 flex flex-col justify-between h-screen">
        <div>
        <h2 className="mt-5 mb-5 text-3xl text-black font-medium">Uber</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h3 className="font-medium text-lg mb-3">What&apos;s our Captain Name ?</h3>
        <div className="flex gap-2">
        <input 
        required 
        className="text-base mb-3 bg-[#eeee] w-1/2 p-2 rounded border" 
        type="text" 
        placeholder="first name"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        />
        <input  
        className="text-base mb-3 bg-[#eeee] w-1/2 p-2 rounded border" 
        type="text" 
        placeholder="last name"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        />
        </div>
        <h3 className="font-semibold text-lg mb-3">What&apos;s our Captain Email ?</h3>
        <input 
        required 
        className="text-base mb-3 bg-[#eeee] w-full p-2 rounded border" 
        type="email" 
        placeholder="email@example.com"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <h3 className="font-semibold text-lg mb-2">Enter Password</h3>
        <input 
        required 
        className="text-base mb-3 bg-[#eeee] w-full p-2 rounded border" 
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <h3 className="text-base font-semibold text-lg mb-3">Vehicle details</h3>
        <div className="flex gap-2">
          <input className="w-1/2 mb-3 p-2 rounded border bg-[#eee]" 
          type="text"
          placeholder="Plate" 
          value={plate}
          onChange={(e)=>setPlate(e.target.value)}
          required
          />
          <input className="w-1/2 mb-3 p-2 rounded border bg-[#eee]" 
          type="text" 
          placeholder="Capacity"
          value={capacity}
          onChange={(e)=>setCapacity(e.target.value)} 
          required
          />
        </div>
        <div className="flex gap-2">
          <input className="w-1/2 mb-5 p-2 rounded border bg-[#eee]" 
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e)=>setColor(e.target.value)}
          required
          />
          <select className="w-1/2 mb-5 p-2 rounded border bg-[#eee]"
          value={vehicleType}
          onChange={(e)=>setVehicleType(e.target.value)}
          required
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Bus">Bus</option>
          </select>
        </div>

        <button className="bg-black text-white w-full p-2 font-medium rounded">Create account</button>
        </form>
        <p className="mt-1 text-center font-semibold"> Already have an account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
        </div>
        <div className="mb-6">
           <p className="text-[11px] leading-tight">This site is protected by reCAPTCHA and the google <span className="font-bold underline">Privacy Policy</span> and <span className="font-bold underline">Terms of Service</span> apply.</p>
        </div>
    </div>
  )
}


export default CaptainSignup
