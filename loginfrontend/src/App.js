import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
// import Sidebar from "./components/SideBar";
// import { useState } from "react";
import Room from "./pages/rooms"
import About from "./pages/about";

// import Sidebar from "./components/SideBar";

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
function App() {

  // const [ user, setLoginUser] = useState({})
  return (
  <div className="App">
    <Router>
      <Routes>
      {/* <Route path="/" element={<dashboard/>}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/rooms" element={<Room/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
