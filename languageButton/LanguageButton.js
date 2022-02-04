import React, { useContext } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";
import "./LanguageButton.css"
import  {useNavigate}  from 'react-router-dom'

function LanguageButton() {
    let navigate = useNavigate();

    const {isEnglish} = useContext(LanguageContext)
    function handleChange(value) {
        navigate(`${value}`)
    }
  return (
    <>
      {isEnglish ? (
        <select
          className="select-language"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value={"/en"}>English</option>
          <option value={"/"}>Deutsch</option>
        </select>
      ) : (
        <select
          className="select-language"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value={"/"}>Deutsch</option>
          <option value={"/en"}>English</option>
        </select>
      )}
    </>
  );
}

export default LanguageButton;
