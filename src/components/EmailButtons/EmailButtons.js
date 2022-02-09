import React, { useState } from "react";
import "./EmailButtons.css"
import  {useNavigate}  from 'react-router-dom'

function EmailButtons() {
  let navigate = useNavigate()

  const [emailValue , setEmailValue] = useState("")
  const checkUrl = window.location.pathname.includes("/en");

  const goToSignup = () =>{
    localStorage.setItem("email",emailValue)
    navigate("/signup")
  }

  const getEmailInput = (e) =>{
    setEmailValue(e.target.value)
    
  }
  return (
    <form>
      <input className="email-input" placeholder="E-Mail-Adresse" value={emailValue} onChange={getEmailInput} />
      <button className="email-button" onClick={goToSignup}>
        {!checkUrl ? <span>Loslegen</span> : <span> Get Started</span>}
      </button>
    </form>
  );
}

export default EmailButtons;
