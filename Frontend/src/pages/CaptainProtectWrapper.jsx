import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const CaptainProtectWrapper=({ children }) =>{
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  console.log(token);

  axios
    .get("http://localhost:3000/captains/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    })
},[token]);
  console.log(isLoading);
  if (isLoading) {
    return <div>loading .....</div>;
  }
  return <div>{children}</div>;
}

export default CaptainProtectWrapper;
