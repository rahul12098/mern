import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({         // initial state user  all name email etc etc are null at first and stored in user 
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,                               // spread operator 
      [name]: value,
    });
    console.log(name, value);
  };

  //storing the values in user

  const register = async () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      //alert("posted")
      //console.log(user)
      await axios.post("http://localhost:5000/register", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      });
      // .catch(err=>{                                 //taking the err from the server then catching the error
      //     console.error(err);
      //     alert("Cannot Register !")
      // });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="register">
      {console.log("user", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="your name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder=" your email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder=" your password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder=" Re-enter your password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/")}>
        login
      </div>
    </div>
  );
};

export default Register;
