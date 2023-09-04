import React from 'react';
import { useNavigate } from 'react-router-dom';


function Main() {
  const history = useNavigate();

  function handleClick(e) {
    history(e.target.value)
  }
  return (
    <>
    <button onClick={handleClick} value={"/registration"}>registration</button>
    <button onClick={handleClick} value={"/login"}>Login</button>
    <button onClick={handleClick} value={-1}>-</button>
    
    
    </>
  );
}

export default Main;
