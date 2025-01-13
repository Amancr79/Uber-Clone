import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from "axios"

function UserProtectPage({
    // eslint-disable-next-line react/prop-types
    children
}) 

{
   const token=localStorage.getItem('token');
   const navigate=useNavigate();
   const [isLoading,setIsLoading]=useState('true');
   // eslint-disable-next-line no-unused-vars
   const {user,setUser}=useContext(UserDataContext);
   console.log(token);
    useEffect(()=>{
    if(!token){
      navigate('/login')
      }
   axios.get("http://localhost:3000/users/profile",{
    headers:{
      Authorization:`Bearer ${token}`
    }
   }).then((response)=>{
      if(response.status===201){
        setUser(response.data.user);
        console.log(response.data.user);
        setIsLoading(false);
      }
   }).catch((err)=>{
    console.log(err);
    localStorage.removeItem('token');
    navigate('/login')
   })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token])

   if(isLoading){
     return <div>Loading user profile .... </div>
   }
  return (
    <>
    {
        children
    }
    </>
  )
}

export default UserProtectPage