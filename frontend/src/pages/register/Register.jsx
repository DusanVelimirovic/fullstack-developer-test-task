// Import internal modules
import "./register.css";

// Import external Modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
export default function Register() {

  // Collect data from input fields
const [inputs, setInputs] = useState({
  username: "",
  email: "",
  password: "",
});


// Handle errors during register
const [err, setError] = useState(null);

  // Use navigate hook to after succesufull registration redirect to login page
  const navigate = useNavigate();

// Collect changes in form input fields
// Pass data as callback to setInputs()
const handleChange = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  //console.log(inputs);
};

// Handle register request using axios
const handleClick = async e => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:8800/api/auth/register", inputs);
    navigate("/login");
  }

  catch (err){
    setError(err.response.data);
  }

}




  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          name="username"  
          onChange={handleChange}
          
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          name="email"  
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          name="password"  
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Confirm your password..."
        />
      {err && err}
        <button className="registerButton" onClick={handleClick}>
          Register
        </button>
      </form>

    </div>
  );
}