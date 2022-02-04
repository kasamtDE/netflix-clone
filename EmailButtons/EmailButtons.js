import React, { useState } from "react";
import "./EmailButtons.css"
import  {useNavigate}  from 'react-router-dom'

function EmailButtons() {
  let navigate = useNavigate()
  const checkUrl = window.location.pathname.includes("/en");

  const goToSignup = () =>{
    navigate("/signup")
  }

  return (
    <form>
      <input className="email-input" placeholder="E-Mail-Adresse"/>
      <button className="email-button" onClick={goToSignup}>
        {!checkUrl ? <span>Loslegen</span> : <span> Get Started</span>}
      </button>
    </form>
  );
}

export default EmailButtons;
