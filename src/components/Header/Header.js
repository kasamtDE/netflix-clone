import React, { useEffect, useContext } from "react";
import "./Header.css";
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../Contexts/LanguageContext";
import LanguageButton from "../languageButton/LanguageButton";

export default function Header() {
  let navigate = useNavigate();

  const { isEnglish } = useContext(LanguageContext);

  function handleChange(value) {
    navigate(`${value}`);
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
            value={"/login"}
            onClick={(e) => handleChange(e.target.value)}
          >
            Einloggen{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
