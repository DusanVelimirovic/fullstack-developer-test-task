// Import external modules
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

// Import internal modules
import "./sidebar.scss";



const Sidebar = () => {

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

            <Link to="/" style={{textDecoration:"none"}}></Link>    
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
            <Link />

          <li>
          <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;