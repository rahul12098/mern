import React from "react";
import "./dashboard.css"
import Sidebar from "../components/SideBar";


const dashboard = () => {
    return (
        <div className="dashboard ">
     
        <div className="card">
        <div className="parent">
            <Sidebar/>
           
            <div className="head">
            <h1>Welome to Hostellite!<span>just a click away!</span></h1> 
           
            </div>
            <div className="dash">
              <h4>Rooms booked:<br></br><br></br>
              234
              </h4>
            </div>
            <br></br>
            <div className="gender">
              <h4>No. of Boys:<br></br><br></br>
                    136<br></br>
                  No. of Girls:<br></br><br></br>
                  117
              </h4>
            </div>

        </div>
        </div>
        </div>
     
    )
}

export default dashboard