import { Fragment, useEffect, useState } from "react";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { LanguageContext } from "./components/Contexts/LanguageContext.js";
import { UserAuthContext } from "./components/Contexts/UserAuthContext.js";
import Login from "./components/Login/Login.js";
import {auth} from "./firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth"
import Register from "./components/Register/Register.js";
import Browse from "./components/Browse/Browse.js";
import Row from "./components/Row/Row.js";
function App() {
  const [isEnglish,setIsEnglish] = useState(false)

  const [registerUser,setRegisterUser] = useState({registerEmail:"",registerPassword:""})
  const [loginUser,setLoginUser] = useState({loginEmail:"",loginPassword:""})
  const [user,setUser] = useState({})
  const [errors,setErrors] = useState({})

  onAuthStateChanged(auth,(currentUser) =>{
    setUser(currentUser)

  })

  const register = async (e) =>{
    e.preventDefault()

    const {registerEmail,registerPassword} = registerUser
    try{
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
    }
    catch (error){
      console.log(error.message)
    }
    setRegisterUser({registerEmail:"",registerPassword:""})


  }
  const login = async (e) =>{
    e.preventDefault()

    const {loginEmail,loginPassword} = loginUser
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
    }
    catch (error){
      
    }
 
  }
  const logout = async (e) =>{
    e.preventDefault()

    signOut(auth)
  }
  useEffect(() =>{},[login])
  
  useEffect(() =>{
    const checkUrl = window.location.pathname

    if(checkUrl.includes("/en")){
      setIsEnglish(true)
    }else{
      setIsEnglish(false)
    }
  },[])


  return (
    <div className="App">
      <UserAuthContext.Provider value = {{registerUser,setRegisterUser,loginUser,setLoginUser,register,login,logout,user,setUser}}>
      <LanguageContext.Provider value = {{isEnglish,setIsEnglish}}>

      <Router>
        <Fragment>
          <Routes>
              <Route element={<Header />} />
              <Route path="/signup" element={auth?.currentUser ? <Navigate to = "/browse" /> : <Register /> }/>
              <Route path="/" element={<Home />} />
              <Route path="/en" element={<Home />} />
              <Route path="/login" element={auth?.currentUser ? <Navigate to = "/browse" /> : <Login /> } />
              <Route path="/browse" element={auth?.currentUser ? <Browse /> : <Navigate to = "/login"/>}/>
          </Routes>
        </Fragment>
        <Footer />
      </Router>
      </LanguageContext.Provider>
      </UserAuthContext.Provider>

    </div>
  );
}

export default App;
