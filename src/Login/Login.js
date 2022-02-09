import React, { useContext, useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../Header/logo.svg";
import { useAuthContext } from "../Contexts/UserAuthContext";
import Footer from "../Footer/Footer";


function Login() {

  const navigate = useNavigate()
  const goToHome = () =>{
    navigate("/")
  }
  const {
    registerUser,
    loginUser,
    setLoginUser,
    login,
    user,
    loading,
    errors,
  } = useAuthContext();

  return (
    <div className="login-container">
      <div className="login-header-container">
        <div onClick={goToHome}>
          <img className="login-header-logo" src={logo} />
        </div>
      </div>
      
      <div className="login-overlay"></div>
      <div className="login-background"></div>
      <div className="login-main-container">
        <div className="login-outer-container ">
        <div className="login-inner-container ">
          <h1>Sign In</h1>
          {errors.length > 1 ? <div className="error-message">{errors}</div> : ""}
          <form className="form"> 
            <input
              placeholder="Email"
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
            <button className="login" disabled={loading} onClick={login}>
              {" "}
              Sign In
            </button>
          </form>
          <p className="register-text">
          New to Netflix? <a href="/"> Sign up now.</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
