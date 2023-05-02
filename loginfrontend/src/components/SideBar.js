import React from "react";
//  import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";






const Sidebar = () => {



  const navigate =useNavigate()

  return (
    <aside>
    <div className="sidebar">
      <div className="sidebar_inner">
        <ul>
          <li>
            
            <span className="text" onClick={() => navigate("/dashboard")}>Dashboard</span>
          </li>

          <li>
             <span className="text" onClick={() => navigate("/rooms")}>Room book</span>
          
          </li>
          <li>
            <span className="text">Menu</span>
          </li>
          <li>
            <span className="text">Cleaning</span>
          </li>
          <li>
            <span className="text">Service</span>
          </li>
          <li>
            <span className="text" onClick={() => navigate("/about")}>About </span>
          </li>
          <li>
            <span className="text" onClick={() => navigate("/contact")}>Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
    </aside>
  );
};

export default Sidebar;

//px- padding left and right
//mt- margin top
//p- padding on all sides
