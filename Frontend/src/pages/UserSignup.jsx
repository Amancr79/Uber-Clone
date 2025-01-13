/* eslint-disable no-unused-vars */
import { useState,useContext} from "react"
import { Link ,useNavigate} from "react-router-dom"
import axios from 'axios'
import {UserDataContext} from "../context/UserContext";

function UserSignup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const {user,setUser}=useContext(UserDataContext);
  const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newUser={
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password
        };
        try {
            const response=await axios.post('http://localhost:3000/users/register',newUser);
            console.log("user");
            if(response.status===201){
                const data=response.data
                setUser(data.user);
                localStorage.setItem('token',data.token);
                console.log(data.user);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
        
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
        <h3 className="font-medium text-lg mb-3">What&apos;s Your Name ?</h3>
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
        <h3 className="font-semibold text-lg mb-3">What&apos;s Your email ?</h3>
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
        <button className="bg-black text-white w-full p-2 font-medium rounded">Create account</button>
        </form>
        <p className="mt-1 text-center font-semibold"> Already have an account? <Link to='/login' className="text-blue-600">Login here</Link></p>
        </div>
        <div className="mb-12">
           <p className="text-[11px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
    </div>
  )
}


export default UserSignup