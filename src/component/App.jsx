import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Home from "./Home"
function App(params) {
  return (
    <div style={{ display: "grid", height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App