import { useState} from "react"
import { Link } from "react-router-dom"
function CaptainSignup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [captainData,setCaptainData]=useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(captainData)
        setCaptainData({
            fullname:{
                firstName:firstName,
                lastName:lastName,
            },
            email:email,
            password:password});
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
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
        <h3 className="font-semibold text-lg mb-3">Enter Password</h3>
        <input 
        required 
        className="text-base mb-5 bg-[#eeee] w-full p-2 rounded border" 
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="bg-black text-white w-full p-2 font-medium rounded">Log In</button>
        </form>
        <p className="mt-1 text-center font-semibold"> Already have an account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
        </div>
        <div className="mb-12">
           <p className="text-[11px] leading-tight">This site is protected by reCAPTCHA and the google <span className="font-bold underline">Privacy Policy</span> and <span className="font-bold underline">Terms of Service</span> apply.</p>
        </div>
    </div>
  )
}


export default CaptainSignup
