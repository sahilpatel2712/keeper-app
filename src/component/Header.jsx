import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation=useNavigate()
  return (
    <header>
    <h1>Keeper</h1>
    <h2>
    <button onClick={()=>{localStorage.removeItem("userEmail");navigation('/')}} className="log-out">Log Out</button>
    </h2>
  </header>
  );
}

export default Header;
