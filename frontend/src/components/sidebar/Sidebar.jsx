// Import external modules
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

// Import internal modules
import "./sidebar.scss";




const Sidebar = () => {

  // Use navigate hook
  // After logout process redirect to register page
  const navigate = useNavigate();

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);


  // Handle logout process
  const handleLogout = (e) => {

    localStorage.clear();

    axios.post("http://localhost:8800/api/auth/logout", {}, {withCredentials:true})
      .then(res => {
        navigate("/register");
 
      }).catch(err => console.log(err));





  }



  return (
    <div className="sidebar">
      <div className="top">

      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

            <Link to="/" style={{textDecoration:"none"}}>
            <li>
            <DashboardIcon className="icon" />
            <span>FullStack Developer Test Task</span>
          </li>
            </Link>

          <li>
          <LogoutIcon className="icon"/>

        <button onClick={handleLogout}>
          Logout
        </button>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;