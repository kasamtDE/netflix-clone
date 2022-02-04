import React, { useContext, useState } from "react";
import "./Login.css";
import logo from "../Header/logo.svg";
import { UserAuthContext } from "../Contexts/UserAuthContext";
import Footer from "../Footer/Footer";

function Login() {
  const {
    registerUser,
    loginUser,
    setLoginUser,
    login,
  } = useContext(UserAuthContext);

  return (
    <div className="login-container">
      <div className="login-header-container">
        <a href="/">
          <img className="login-header-logo" src={logo} />
        </a>
      </div>
      <div className="login-overlay"></div>
      <div className="login-background"></div>
      <div className="login-main-container">
        <div className="login-outer-container ">
        <div className="login-inner-container ">
          <h1>Einloggen</h1>
          <form className="form"> 
            <input
              placeholder="E-mail Adresse oder Telefonnummer"
              type="email"
              onChange={(e) =>
                setLoginUser({
                  ...loginUser,
                  loginEmail: `${e.target.value}`,
                })
              }
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) =>
                setLoginUser({
                  ...loginUser,
                  loginPassword: `${e.target.value}`,
                })
              }
            />
            <button className="login" onClick={login}>
              {" "}
              Einloggen
            </button>
          </form>
          <p className="register-text">
            Neu bei Netflix? <a href="/"> Jetzt registrieren</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
