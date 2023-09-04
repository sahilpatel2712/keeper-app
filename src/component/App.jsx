import React from "react";
import Main from "./Main";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Home from "./Home"
function App(params) {
    return(
        <div>
    
        <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
        </div>
    )
}

export default App