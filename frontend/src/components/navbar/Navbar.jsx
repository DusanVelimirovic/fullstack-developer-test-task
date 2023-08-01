import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { AuthContext } from "../../context/authContext";

// Import external modules
import { useContext } from "react";


const Navbar = () => {

  const { currentUser } = useContext(AuthContext); 

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
          <span>{currentUser.username}</span>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;