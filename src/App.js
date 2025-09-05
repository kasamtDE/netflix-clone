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
import { useAuthContext } from "./components/Contexts/UserAuthContext.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Browse from "./components/Browse/Browse.js";
function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const { user } = useAuthContext();

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
                <Route
                  path="/signup"
                  element={
                    user ? <Navigate to="/browse" /> : <Register />
                  }
                />
                <Route exact path="/" element={
                  <div>
                    <Header />
                    {user ? <Navigate to="/browse" /> : <Home />}
                  </div>
                } />
                <Route exact path="/en" element={
                  <div>
                    <Header />
                    {user ? <Navigate to="/browse" /> : <Home />}
                  </div>
                } />
                <Route
                  path="/login"
                  element={
                    user ? <Navigate to="/browse" /> : <Login />
                  }
                />
                <Route
                  path="/browse"
                  element={
                    user ? <Browse /> : <Navigate to="/login" />
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
