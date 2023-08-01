// Import external Modules
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

// Import Internal modules
import "./login.css";
import { AuthContext } from "../../context/authContext";
export default function Login() {

   // Collect inputs from Login form
   const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  
  // Handle errors during login
  const [err, setError] = useState(null);

  // Use navigate hook to after succesufull login redirect to home page
  const navigate = useNavigate();

  // Handle changes in form input fields
  // Pass data as callback to setInputs()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

  // AuthContext return login()
const { login } = useContext(AuthContext);

const handleLogin = async (e) => {
  e.preventDefault();
  try{
    await login(inputs);
    // After succesufull login navigate to home page
    navigate("/");
  } catch (err){
    setError(err.response.data);
  }

  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          name="email" 
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          name="password" onChange={handleChange}
        />
        {err && err}
        <button onClick={handleLogin} className="loginButton">
          Login
        </button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton">
            Register
        </button>
      </Link>

    </div>
  );
}