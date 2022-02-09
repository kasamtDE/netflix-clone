import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../Header/logo.svg";
import { useAuthContext } from "../Contexts/UserAuthContext";
import Footer from "../Footer/Footer";
import "./Register.css";

function Register() {
  const {
    registerUser,
    setRegisterUser,
    register,
    loading,
    errors
  } = useAuthContext();

  useEffect(() =>{
    const getValue =localStorage.getItem("email")
    const getEmail = document.querySelector(".email-input")
    if(getValue.length >0){
      getEmail.value = getValue
    }

  },[])

  return (
    <>
      <div className="body-overlay"></div>
      <div className="login-container register-container ">
        <div className="login-header-container register-header-container">
          <a href="/">
            <img className="login-header-logo" src={logo} />
          </a>
          <a href="/login">Sign In</a>
        </div>
        <div className="login-overlay register-overlay"></div>
        <div className="login-background register-background"></div>
        <div className="login-main-container register-main-container">
          <div className="login-outer-container register-outer-container">
            <div className="login-inner-container register-inner-container">
              <h1>Create a password to start your membership</h1>
              {errors.length > 1 ? <div className="error-message">{errors}</div> : ""}
              <form className="form">
                <input
                  placeholder="E-mail Adresse oder Telefonnummer"
                  type="email"
                  className="email-input"
                  onChange={(e) =>
                    setRegisterUser({
                      ...registerUser,
                      registerEmail: `${e.target.value}`,
                    })
                  }
                />
                <input
                  placeholder="Password"
                  type="Password"
                  onChange={(e) =>
                    setRegisterUser({
                      ...registerUser,
                      registerPassword: `${e.target.value}`,
                    })
                  }
                />
                <button className="login" disabled={loading} onClick={register}>
                  {" "}
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
