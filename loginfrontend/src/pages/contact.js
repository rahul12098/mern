import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "./contact.css";
import axios from "axios";

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        hostel: "",
        contact:"",
        feedback: "",
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        console.log(name, value);
    }

    const submit = async () => {
      const { name, email, hostel,contact, feedback, } = data;
      if(name && email && hostel && contact && feedback) {
      await axios.post("http://localhost:5000/contact", data)
      .then((res) => {
        alert(res.data.message);
      });
      }
      else { 
        alert("Invalid  Input ")
      }

    };

    return (
        <div className="contact">
            <SideBar />
            <div className="heading1">
                <h1>FOR QUERIES</h1>
            </div>

            <input
                type="text"
                name="name"
                placeholder="enter your name"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="email"
                placeholder="enter your email id"
                onChange={handleChange}
            ></input>

            <input
                type="text"
                name="hostel"
                placeholder="enter hostel"
                onChange={handleChange}
            ></input>
           
           <input
                type="text"
                name="contact"
                placeholder="enter your contact number:"
                onChange={handleChange}
            ></input>

            <div className="heading1">
                <h2>Feedback</h2>
                <div className="feedback">
                <input 
               
                type="text"
                name="feed"
                placeholder="enter feedback"
                onChange={handleChange}
                
            ></input>
                </div>
            </div>
            

           <div className="button" onClick={submit}>
            submit
          </div>
        </div>
    );
};
export default Contact;