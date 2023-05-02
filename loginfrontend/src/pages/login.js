import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
    
        email: "",
        password: "",
        
    })

    function handleChange(e) {

        const { name, value } = e.target
        setUser(
            {
                ...user,
                [name]: value
            }
        )
   
    }
     
    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            // setLoginUser(res.data.user)
            // navigate("/")
            if(res.data.message === "login successfully")
            navigate("/dashboard")
        })
    }
    return (
        <div className="login">
            <div class="heading">
            <h1>Login</h1>
            </div>
            <input type="text"  name="email" value={user.email} placeholder="enter your email" onChange={handleChange}></input>
            <input type="password"  name="password" value={user.password} placeholder="enter your password" onChange={handleChange} ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>register</div>
        </div>   
    )
}

export default Login