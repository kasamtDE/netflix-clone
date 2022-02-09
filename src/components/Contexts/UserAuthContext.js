import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const UserAuthContext = createContext({});
export const useAuthContext = () => useContext(UserAuthContext);

export default function UserAuthContextProvider({ children }) {
  const [registerUser, setRegisterUser] = useState({
    registerEmail: "",
    registerPassword: "",
  });
  const [loginUser, setLoginUser] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

 

  const register = async (e) => {
    e.preventDefault();

    const { registerEmail, registerPassword } = registerUser;
    try {
      const checkUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error)
    }
  };
 
  const login = async (e) => {
    e.preventDefault();

    const { loginEmail, loginPassword } = loginUser;
    signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (err) {
      setLoginUser({ loginEmail: "", loginPassword: "" });
    }
  };
  const logout = async (e) => {
    e.preventDefault();

    await signOut(auth);
  };

  return (
    <UserAuthContext.Provider
      value={{
        register,
        login,
        logout,
        loginUser,
        setLoginUser,
        registerUser,
        setRegisterUser,
        user,
        setUser,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
