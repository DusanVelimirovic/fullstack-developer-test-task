// Import external Modules
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

// Import Internal modules
import "./login.css";
//import Validation from "./loginValidation.js"; 
//import { AuthContext } from "../../context/authContext"; PRIVREMENO ONESPOSOBLJENO
export default function Login() {

   // Collect inputs from Login form
   const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  
  // Handle errors during login (validation process)
  const [formErrors, setFormErrors] = useState({});


  // PRIVREMENO ONESPOSOLJENO
  // Use navigate hook to after succesufull login redirect to home page
  const navigate = useNavigate();


  // Validation function


    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 10) {
        errors.password = "Password must be more than 10 characters";
      } 
      return errors;
    };


  // Handle changes in form input fields
  // Pass data as callback to setInputs()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

    // PRIVREMENO ONESPOSOBLJENO
  // AuthContext return login()
//const { login } = useContext(AuthContext);

const handleLogin = async (e) => {
  e.preventDefault();

  // Pass all form values(inputs) on validation
  setFormErrors(validate(inputs));

  console.log("Button has been clicked");

  // PRIVREMENO ONESPOSOBLJENO
/*
  try{
    await login(inputs);
    // After succesufull login navigate to home page
    navigate("/");
  } catch (err){
    setError(err.response.data);
  }*/

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
        <p> {formErrors.email} </p>
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          name="password" onChange={handleChange}
        />
        <p> {formErrors.password} </p>
        {/*{err && err}*/}
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