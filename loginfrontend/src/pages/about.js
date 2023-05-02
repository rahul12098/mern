import React from "react";
import "./about.css"
import Sidebar from "../components/SideBar";

const about = () => {
    return (
        <div className="about">
            <Sidebar/>
            <h1>About Us</h1>
            
      <p>Welcome to our hostel booking website! We understand the importance of finding comfortable and affordable accommodations. Our goal is to make it easy for you to find the perfect hostel room for you.</p>
      <p>Our website features a wide variety of rooms, AC, Non-AC, Single bed, Double bed and Triple Bed. We work with hostel adminstration and managers to ensure that each listing is accurate and up-to-date, so you can book with confidence.</p>
      <p>Through this website you can check the current status of your room with respect to the cleaning services,  whether it is being cleaned, or has been cleaned.</p>
      <p>We will be providing services like regular checking of the rooms for leakage or fault in any electical appliances and you can book accordingly in order to get your prblems solved</p>

      <p>If you have any questions or concerns, please don't hesitate to contact us. We're always happy to help!</p>
      
        </div>
    )
}

export default about