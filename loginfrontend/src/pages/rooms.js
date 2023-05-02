import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "./rooms.css";
import axios from "axios";

const Room = () => {
    const [data, setData] = useState({
        name: "",
        rollno: "",
        gender: "",
        sem: "",
        preferrence: "",
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
      const { name, rollno, gender, sem, preferrence } = data;
      if(name && rollno && gender && sem && preferrence) {
      await axios.post("http://localhost:5000/rooms", data)
      .then((res) => {
        alert(res.data.message);
      });
      }
      else { 
        alert("Invalid  Input ")
      }

    };

    return (
        <div className="room">
            <SideBar />
            <div className="heading1">
                <h1>BOOKING ROOM</h1>
            </div>

            <input
                type="text"
                name="name"
                placeholder="enter your name"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="rollno"
                placeholder="enter your rollnumber"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="gender"
                placeholder="enter your gender"
                onChange={handleChange}
            ></input>

            <input
                type="number"
                name="sem"
                placeholder="enter your semester"
                min="1"
                max="8"
                onChange={handleChange}
            ></input>
           
            <div className="heading1">
                <h2>choose room</h2>
                <div className="para">
                    <p>
                        Types of accomodation:<br></br>
                        Single<br></br>
                        double<br></br>
                        triple
                    </p>
                </div>
            </div>
            <input
                type="text"
                name="preferrence"
                placeholder="enter your preferrence"
                onChange={handleChange}
            ></input>

           <div className="button" onClick={submit}>
            submit
          </div>
        </div>
    );
};
export default Room;
