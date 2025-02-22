import { useState,useContext} from "react"
import { Link } from "react-router-dom"
import { UserDataContext } from "../context/UserContext";
import {useNavigate} from "react-router-dom"
import axios from 'axios'

function UserLogin() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const {user,setUser}=useContext(UserDataContext);

  // const [userData,setUserData]=useState({});

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const userData={email:email,password:password};
        const response=await axios.post('http://localhost:3000/users/login',userData);
        if(response.status===200){
          const data=response.data;
          setUser(data.user);
          localStorage.setItem('token',data.token);
          navigate('/logout');
        }
        setEmail('');
        setPassword('');
    }
  return (
    <div className="ml-5 mr-5 flex flex-col justify-between h-screen">
        <div>
        <h2 className="mt-5 mb-5 text-3xl text-black font-medium">Uber</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h3 className="font-semibold text-xl mb-3">What&apos;s Your email ?</h3>
        <input 
        required 
        className="mb-3 bg-[#eeee] w-full p-2 rounded border placeholder:text-base" 
        type="email" 
        placeholder="email@example.com"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <h3 className="font-semibold text-xl mb-3">Password</h3>
        <input 
        required 
        className="mb-5 bg-[#eeee] w-full p-2 rounded border placeholder:text-base" 
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="bg-black text-white w-full p-2 font-medium rounded">Log In</button>
        </form>
        <p className="mt-1 text-center font-semibold"> New here? <Link to='/signup' className="text-blue-600">Register as an User</Link></p>
        </div>
        <div>
            <Link to='/captain-login' className="flex items-center justify-center bg-[#006622] text-white mb-5 p-2 w-full font-medium rounded">Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin