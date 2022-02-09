import { Fragment, useEffect, useState } from "react";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LanguageContext } from "./components/Contexts/LanguageContext.js";
import UserAuthContextProvider, {
  useAuthContext,
} from "./components/Contexts/UserAuthContext.js";
import Login from "./components/Login/Login.js";
import { auth } from "./firebase";
import Register from "./components/Register/Register.js";
import Browse from "./components/Browse/Browse.js";
import Row from "./components/Row/Row.js";
function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const { setUser } = useAuthContext();

  useEffect(() => {
    const checkUrl = window.location.pathname;

    if (checkUrl.includes("/en")) {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
  }, []);

  return (
    <div className="App">
        <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
          <Router>
            <Fragment>
              <Routes>
                <Route element={<Header />} />
                <Route
                  path="/signup"
                  element={
                    auth?.currentUser ? <Navigate to="/browse" /> : <Register />
                  }
                />
                <Route path="/" element={<Home />} />
                <Route path="/en" element={<Home />} />
                <Route
                  path="/login"
                  element={
                    auth?.currentUser ? <Navigate to="/browse" /> : <Login />
                  }
                />
                <Route
                  path="/browse"
                  element={
                    auth?.currentUser ? <Browse /> : <Navigate to="/login" />
                  }
                />
              </Routes>
            </Fragment>
            <Footer />
          </Router>
        </LanguageContext.Provider>
    </div>
  );
}

export default App;
