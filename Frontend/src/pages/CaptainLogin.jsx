import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = { email: email, password: password };
    const response = await axios.post(
      "http://localhost:3000/captains/login",
      captainData
    );
    console.log("After axios call");
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate('/captain-home');
    }
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="ml-5 mr-5 flex flex-col justify-between h-screen">
      <div>
        <h2 className="mt-5 mb-5 text-3xl text-black font-medium">Uber</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="font-semibold text-xl mb-3">
            What&apos;s Your email ?
          </h3>
          <input
            required
            className="mb-3 bg-[#eeee] w-full p-2 rounded border"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="font-semibold text-xl mb-3">Password</h3>
          <input
            required
            className="mb-5 bg-[#eeee] w-full p-2 rounded border"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black text-white w-full p-2 font-medium rounded">
            Log In
          </button>
        </form>
        <p className="mt-1 text-center font-semibold">
          {" "}
          New here ?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center bg-[#d5622d] text-white mb-5 p-2 w-full font-medium rounded"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
