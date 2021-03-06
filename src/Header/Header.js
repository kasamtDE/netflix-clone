import React, { useEffect, useContext } from "react";
import "./Header.css";
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../Contexts/LanguageContext";
import LanguageButton from "../languageButton/LanguageButton";

export default function Header() {
  let navigate = useNavigate();
  const checkUrl = window.location.pathname.includes("/en");

  function goToLogin() {
    navigate(`/login`);
  }

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="image-container">
          <img className="logo" src={logo} />
        </div>
        <div className="lang-container">
          <LanguageButton />
          <button
            className="login"
            onClick={goToLogin}
          >
           {!checkUrl ? <span>Einloggen</span> : <span>Login</span> } 
          </button>
        </div>
      </div>
    </div>
  );
}
